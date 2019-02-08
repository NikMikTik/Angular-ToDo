import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { CategoryDto } from './../CategoryDto';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private  httpClient:  HttpClient) { }

getAllList(){
    return  this.httpClient.get('http://localhost:8090/event');
}

getCatgeoryEventById(eventId){
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  
   return this.httpClient.post('http://localhost:8090/event/edit/byId',JSON.stringify(eventId),{headers: headers});
}

getAllCategoryList(){
  return  this.httpClient.get('http://localhost:8090/category');
}
postEvent(eventform){
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
 
  return this.httpClient.post('http://localhost:8090/event/create',JSON.stringify(eventform),{headers: headers});
}

postCategory(categoryform){
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  
   return this.httpClient.post('http://localhost:8090/category/create',JSON.stringify(categoryform),{headers: headers});
 
}

delEvent(eventId){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {eventId}
};
    return this.httpClient.delete('http://localhost:8090/event/delete',httpOptions);
  
}

edEvent(editForm){
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  
   return this.httpClient.put('http://localhost:8090/event/edit',JSON.stringify(editForm),{headers: headers});
 
}

completeEvent(eventId){
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

 return this.httpClient.post('http://localhost:8090/event/completed',JSON.stringify(eventId),{headers: headers});
}
}
