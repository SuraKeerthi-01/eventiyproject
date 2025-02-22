import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendee } from '../Attendees';

@Injectable({
  providedIn: 'root'
})
export class AttendeeserviceService {
  
  URL="http://localhost:9091/api/admin/getallattendees";

  constructor(private http:HttpClient) { }
  
  getAttendeeData():Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }

  getEvnetbyOrganizerId(attendeeId):Observable<any[]>{
    const eventsURL=`http://localhost:9091/api/admin/eventsByAttendeeId/${attendeeId}`;
    return this.http.get<any[]>(eventsURL);
  }
}
