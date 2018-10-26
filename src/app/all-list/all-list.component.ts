import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../service/data.service';
import { CategoryDto } from './../CategoryDto';
import { EventTable } from 'src/app/eventTable';
import { ViewChild } from '@angular/core';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  displayedColumns: string[] = ['topic', 'eventDateTime', 'completedDateTime', 'createdDateTime', 'summary', 'importance', 'status', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  noList: boolean;
  dashboardElement: EventTable[] = [];
  reloadOption: boolean = false;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient, private dataService: DataService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.dataService.getAllList().subscribe((result: EventTable[]) => {
      this.dashboardElement = result;
      if (result == null) {
        this.noList = true;
      }
      else this.noList = false;
      this.dataSource = new MatTableDataSource(this.dashboardElement);
      this.dataSource.sort = this.sort;

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

  delete(val) {
    this.dataService.delEvent(val).subscribe((result) => {
      let config = new MatSnackBarConfig();
      config.duration = 5000;
      config.panelClass = ['orange-snackbar']
      if (result['code'] === 200) {
        this.snackBar.open("Event Deleted ...!", "", config);
        window.location.reload();
      }

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

  edit(val) {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: 'auto',
      height: '550px',
      data: { eventId: val },
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.buttondisable = false;
      console.log('The dialog was closed');
      // this.categoryName = result;
    });



  }
}
