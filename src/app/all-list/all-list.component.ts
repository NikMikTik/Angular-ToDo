import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http/src/client';
import { DataService } from './../service/data.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private httpClient:HttpClient,private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getAllList().subscribe((result:DashboardElement[]) =>{
      this.dashboardElement=result;
      console.log(result);
      // console.log(result);
      console.log(this.dashboardElement);
     this.dataSource = new MatTableDataSource(this.dashboardElement);
     this.dataSource.sort = this.sort;
    //  console.log("assets/img/"+result[5].imageUrl);
    //  this.src="assets/img/"+result[5].imageUrl;
    //  let reader = new FileReader();
    //  let img=reader.readAsDataURL(result['image']);
 //   alert(result['merchantName']);
  }
      ,
      (error: Response) => {
        if (error)
          alert('An Unexpected Error has Occured... ' + error);
        else {
          throw error;
        }
      });

  }

}
