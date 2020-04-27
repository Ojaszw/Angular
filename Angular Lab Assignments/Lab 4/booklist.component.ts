import { Component, OnInit } from '@angular/core';
import { BookService } from '../books.service';
import { error } from 'protractor';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

   constructor(private booksService:BookService) { }
   books=[];
   errorMsg="";

  ngOnInit() {
    this.booksService.getBook().subscribe(data=>this.books=data,
      error=>this.errorMsg=error)
  }

}
