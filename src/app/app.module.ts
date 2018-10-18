import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllListComponent } from './all-list/all-list.component';
import {
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatCheckboxModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
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
    AllListComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCheckboxModule,
      BrowserModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatSelectModule,
      MatTableModule,
      MatOptionModule,
      MatSlideToggleModule,
   
  ],
  exports: [MatProgressSpinnerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
