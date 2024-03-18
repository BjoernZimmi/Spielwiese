import { Injectable } from '@angular/core';
import { Books } from '../interfaces/books.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookDataService {

  constructor(private http: HttpClient) {
    
   }


   /**
    * 
    * @param url - URL des Backends
    * @returns - Läd die verschiedenen Bücher
    */
  getBooks(url: string) {
    return this.http.get<Books[]>(url, {headers: {Headers: [""]}});
  }


}
