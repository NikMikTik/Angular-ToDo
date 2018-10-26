import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllListComponent } from './all-list/all-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDialogModule,
  MatCheckboxModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSortModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatSnackBarModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  ErrorStateMatcher,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllListComponent,
    AddDialogComponent,
    AddCategoryComponent,
    AddEventComponent,
    EditEventComponent,
    EditDialogComponent,
  ], entryComponents: [AddDialogComponent,EditDialogComponent],
  imports: [
    MatProgressSpinnerModule,
    MatCheckboxModule,
    BrowserModule,
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    // MatOptionModule,
    MatSlideToggleModule,
    HttpClientModule

  ],
  exports: [MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    // MatOptionModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
