import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  //URL:"http://localhost:9091/api/organizer/addevent";
  constructor(private http:HttpClient) {
    
   }

   addEvent(event:Event):Observable<any>{
    console.log("service"+event);
    return  this.http.post<any>("http://localhost:9091/api/organizer/addevent",event);
    
   }
}
