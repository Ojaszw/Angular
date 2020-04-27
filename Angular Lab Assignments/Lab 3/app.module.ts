import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MobileComponent } from './mobile/mobile.component';
import { EMPLOYEETWOComponent } from './employee/employee.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { StudentsService } from './students.service';
import {HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
import { BookService } from './books.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpClientModule],
  declarations: [ AppComponent, HelloComponent, MobileComponent, EMPLOYEETWOComponent, CourseComponent, StudentComponent, BooklistComponent],
  bootstrap:    [ AppComponent ],
  providers: [StudentsService, BookService],
})
export class AppModule { }
