import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteserviceService {

 
  constructor(private http:HttpClient) { }

  deleteEvent(eventId):Observable<any>{
    const  URL=`http://localhost:9091/api/organizer/deleteevent/${eventId}`
    return this.http.delete(URL)
  }
}
