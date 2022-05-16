import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable} from 'rxjs';
import { icontact } from '../models/icontact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private serverUrl: string = "http://localhost:3000/contacts";
  private serverUrl: string = "https://crudcrud.com/api/a08b6545a9d74880a361700549bdc03c/contacts"
  
  constructor(private httpClient: HttpClient) {
  }


  // GET All Contacts
   GetallContacts():Observable<icontact[]> {
 return this.httpClient.get<icontact[]>(`${this.serverUrl}`)
  }


  // GET Single Contact
  getContact(_id:string){
    
    return this.httpClient.get<icontact[]>(`${this.serverUrl}/${_id}`).pipe(
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
  updateContact(_id: string,data: any) {
   
    return this.httpClient.put<icontact[]>(`${this.serverUrl}/${_id}`, data).pipe(
      map((res: any) => { return res; }))
  }


  // delete contact
  deleteContact(_id: string){
    return this.httpClient.delete<icontact[]>(`${this.serverUrl}/${_id}`).pipe(
      map((res: any) => { return res; }))
    }
}
