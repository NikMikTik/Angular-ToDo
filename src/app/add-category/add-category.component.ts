import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AddDialogComponent } from 'src/app/add-dialog/add-dialog.component';
import { AddDialogData } from 'src/app/addDialogData';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryDto } from './../CategoryDto';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    categoryName: new FormControl('', [Validators.required])
  });
catgoryJsonForm:CategoryDto;
  categoryNameList: CategoryDto[] = [];
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddDialogData, private dataService: DataService,public snackBar: MatSnackBar) { }


  
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


  onNoClick(): void {
    this.dialogRef.close();
  }

  save(categoryForm) {
    this.dialogRef.close(categoryForm.value);
    
    let config = new MatSnackBarConfig();
    config.duration = 30000;
    config.panelClass = ['orange-snackbar']
    this.dataService.postCategory(categoryForm.value).subscribe(result =>{
      if(result['code']===200)
      {
        this.snackBar.open("Category Saved...!","", config);
        window.location.reload();
        
      }
    })
  }
  close() {
    this.dialogRef.close();
  }

}
