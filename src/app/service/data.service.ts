import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string,private  httpClient:  HttpClient) { }

  getAllList(){
    return  this.httpClient.get('http://localhost:8090/event');
}
}
