import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { icontact } from '../models/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = `http://localhost:9000`;
  
  constructor(private httpClient: HttpClient) {
  }


  // GET All Contacts
  public GetallContacts(): Observable<icontact[]> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient.get<icontact[]>(dataUrl).pipe(catchError(this.handleError));
  }


  // GET Single Contact
  public getContact(contactId: string): Observable<icontact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.get<icontact>(dataUrl).pipe(catchError(this.handleError));
  }


  // creating a contact
  // public createContact(data:any): Observable<icontact> {
  //   let dataUrl: string = `${this.serverUrl}/contacts`;
  //   return this.httpClient.post<icontact>(dataUrl, contact).pipe(catchError(this.handleError));
  // }

  createContact(data: any) {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient.post<icontact[]>(dataUrl, data).pipe(
  
      map((res: any) => { return res; }))
  
  
  
  }


  // update contact
  public updateContact(contact: icontact, contactId: string): Observable<icontact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.put<icontact>(dataUrl, contact).pipe(catchError(this.handleError));
  }


  // delete contact
  public deleteContact(contactId: string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }


  // Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ``;
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`
    }
    else {
      // server error
      errorMessage = `status : ${error.status}\n Message : ${errorMessage}`;
    }
    return throwError(errorMessage);
  }
}
