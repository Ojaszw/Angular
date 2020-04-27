import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2.1';
  id:number;
name:string;
salary:number;
department:string;
  Emp=[
    {'id':501,'name':"Rajeev",'salary':24000,'department':"CS"},
    {'id':502,'name':"Sanjeev",'salary':79000,'department':"IT"},
    {'id':503,'name':"Anmol",'salary':45000,'department':"ME"}
    ] 
  
  Add () {
      var employee={id:this.id,name:this.name,salary:this.salary,department:this.department};
      this.Emp.push(employee);
  }
  onSubmit()
  {
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
delete(id:number)
{
  for (let i = this.Emp.length - 1; i>= 0; i--) {
      if (this.Emp[i].id === id) {
          this.Emp.splice(i, 1);
      }
  }
}
newid:number;
newname:string;
newsalary:number;
newdepartment:string;
update(id:number,name:string,salary:number,department:string)
{
  this.newid=id;
  this.newname=name;
  this.newsalary=salary;
  this.newdepartment=department;
  }
editrow(id:number,name:string,salary:number,department:string)
{
  for(let i=0;i<this.Emp.length;i++){
    let e=this.Emp[i];
    if(e.id==id){
      console.log(name);
      this.Emp.splice(i,1);  
      this.Emp.push({id,name,salary,department});
      console.log(e.name);
      break;
    }
}
}

}