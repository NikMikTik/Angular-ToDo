import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddDialogComponent } from './../add-dialog/add-dialog.component';
import { DataService } from 'src/app/service/data.service';
import { CategoryDto } from 'src/app/CategoryDto';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categoryId: number;
  categoryName: string;
  buttondisable: boolean;
  categoryNameList: CategoryDto[] = [];
  
  constructor(public dialog: MatDialog,private dataService:DataService) { }


  ngOnInit() {

    this.dataService.getAllCategoryList().subscribe((result: CategoryDto[]) => {
      if (result == null) {

      }
      else {
        this.categoryNameList = result;
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

  openDialog(): void {
    this.buttondisable = true;
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: 'auto',
      height: '550px',
      data: { categoryId: this.categoryId, categoryName: this.categoryName },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buttondisable = false;
      console.log('The dialog was closed');
      this.categoryName = result;
    });
  }

}
