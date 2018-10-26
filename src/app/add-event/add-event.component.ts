import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AddDialogComponent } from 'src/app/add-dialog/add-dialog.component';
import { AddDialogData } from 'src/app/addDialogData';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryDto } from 'src/app/CategoryDto';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  form = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    importance: new FormControl('', [Validators.required]),
eventDateTime: new FormControl('', [Validators.required])
  });
  eventJsonForm;CategoryDto;
  
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

  save(form) {
    this.eventJsonForm={ categoryName:this.form.get('categoryName').value,eventDto:[{ topic:this.form.get('topic').value,summary:this.form.get('summary').value,importance:this.form.get('importance').value,eventDateTime:this.form.get('eventDateTime').value}]}
    
    this.dialogRef.close(this.eventJsonForm.value);
    let config = new MatSnackBarConfig();
    config.duration = 15000;
    config.panelClass = ['orange-snackbar']
    this.dataService.postEvent(this.eventJsonForm).subscribe(result =>{
      if(result['code']===200)
      {
        this.snackBar.open("Event Saved...!","", config);
        window.location.reload();
        
      }
    })
  }

  close() {
    this.dialogRef.close();
  }
}
