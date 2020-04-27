import { Component, OnInit } from '@angular/core';
import {  Course } from './Course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:string[]=['Grocery','Mobile','Electronics','Cloths'];
  ccourse:Course= new Course(100,'Aman','Mobile','aman@y.com','896868');

  constructor() { }

  ngOnInit() {
  }
  saveData(formData:any)
  {
    console.log(this.ccourse);
  }

}