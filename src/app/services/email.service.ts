import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail(payload: any) {
    let headers = new HttpHeaders();
    let _URL = `https://formspree.io/f/xzbnoeae`;
    return this.http.post(_URL, {
      Name: payload.name, 
      Email: payload.email,
       Message: payload.message
    });
  }

}
