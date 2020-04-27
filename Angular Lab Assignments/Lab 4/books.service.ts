import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './booklist/Book';

@Injectable
({
  providedIn: 'root'
})
export class BookService {
  dataUrl:string="assets/books.json"

  constructor(private httpService:HttpClient) { }
  getBook():Observable<Book[]>
  {

    return this.httpService.get<Book[]>(this.dataUrl);
 
   }
  errorHandler(error:HttpErrorResponse)

   {

    return Observable.throw(error.message);
 
    }

}
