import { Component, OnInit } from '@angular/core';
import { MyorderPipe } from './myorder.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private orderPipe: MyorderPipe) {
    console.log("order by digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
  } 

  items = [
    {empId:104,empName:'Rahul',empSal:25000,empDep:'Pyhton',empjoiningdate:'07/02/2013'},
    {empId:105,empName:'Vijay',empSal:11000,empDep:'Java',empjoiningdate:'26/12/2014'},
    {empId:106,empName:'unnati',empSal:56000,empDep:'Python',empjoiningdate:'6/12/2016'},
    {empId:107,empName:'Suraj',empSal:56500,empDep:'CS',empjoiningdate:'08/12/2016'},
    {empId:108,empName:'Amandeep',empSal:75000,empDep:'php',empjoiningdate:'11/01/2017'},
    {empId:110,empName:'Vishwas',empSal:160000,empDep:'Production',empjoiningdate:'19/12/2019'},
    {empId:112,empName:'suresh',empSal:21000,empDep:'BI',empjoiningdate:'16/08/2011'},
    {empId:101,empName:'Aman',empSal:56000,empDep:'Production',empjoiningdate:'4/10/2010'},
    {empId:109,empName:'Divya',empSal:56000,empDep:'Analyst',empjoiningdate:'16/09/2012'} ,
  ];
  order = "empId";
  reverse = false;

}
