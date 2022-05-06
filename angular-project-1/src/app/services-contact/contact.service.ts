import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable} from 'rxjs';
import { icontact } from '../models/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = "http://localhost:3000/contacts";
  
  constructor(private httpClient: HttpClient) {
  }


  // GET All Contacts
   GetallContacts():Observable<icontact[]> {
 return this.httpClient.get<icontact[]>(`${this.serverUrl}`)
  }


  // GET Single Contact
  getContact(id:number){
    
    return this.httpClient.get<icontact[]>(`${this.serverUrl}/${id}`).pipe(
      map((res: any) => { return res; }));
  }


  // creating a contact
  // public createContact(data:any): Observable<icontact> {
  //   let dataUrl: string = `${this.serverUrl}/contacts`;
  //   return this.httpClient.post<icontact>(dataUrl, contact).pipe(catchError(this.handleError));
  // }

  createContact(data: any) {
    return this.httpClient.post<icontact[]>(this.serverUrl,data).pipe(
      map((res: any) => { return res; }))
  }


  // update contact
  updateContact(id: number,data: any) {
   
    return this.httpClient.put<icontact[]>(`${this.serverUrl}/${id}`, data).pipe(
      map((res: any) => { return res; }))
  }


  // delete contact
  deleteContact(id: number){
    return this.httpClient.delete<icontact[]>(`${this.serverUrl}/${id}`).pipe(
      map((res: any) => { return res; }))
    }
}
