import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { AddDialogData } from './../addDialogData';
import { DISABLED } from '@angular/forms/src/model';
import { CategoryDto } from 'src/app/CategoryDto';
import { DataService } from './../service/data.service';
import { EventTable } from 'src/app/eventTable';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  eventIdJson;editDataDialog:CategoryDto[]=[];
  cN:string;
  event:EventTable[];
  topic:string;
  summary:string;importance:string;eventDateTime:Date;eventId:number;
  categoryNameList: CategoryDto[] = [];
  eventJsonForm;
  editForm:FormGroup;
  

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataService:DataService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      categoryName: new FormControl(this.cN, [Validators.required]),
      topic: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required]),
      importance: new FormControl(this.importance, [Validators.required]),
  eventDateTime: new FormControl('', [Validators.required])
    });
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
    this.eventIdJson={eventId:this.data.eventId}
    
    this.dataService.getCatgeoryEventById(this.eventIdJson).subscribe((result:CategoryDto[]) =>{
      if(result==null){
      }
      else{
        this.editDataDialog=result;
          this.cN =result['categoryName'];
          this.event=result['eventDto'];
          this.topic=this.event[0].topic;
          this.eventId=this.event[0].eventId;
          this.summary=this.event[0].summary;
          this.importance=this.event[0].importance;
          this.eventDateTime=this.event[0].eventDateTime;

          console.log(this.editForm.value);
      }
 

    },
      (error: Response) => {
        if (error)
          alert('An Unexpected Error has Occured... ' + error);
        else {
          throw error;
        }
      });

  }
  save(editForm) {
    console.log("in edit form");
  this.eventJsonForm={ eventId:this.eventId, topic:this.editForm.get('topic').value,summary:this.editForm.get('summary').value,importance:this.editForm.get('importance').value,eventDateTime:this.editForm.get('eventDateTime').value}

    this.dialogRef.close(this.eventJsonForm.value);
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['orange-snackbar']
    this.dataService.edEvent(this.eventJsonForm).subscribe(result =>{
      
      if(result['code']===200)
      {
        this.snackBar.open("Event Edited ...!","", config);
        window.location.reload();
        
      }
    })
  }

  close() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
