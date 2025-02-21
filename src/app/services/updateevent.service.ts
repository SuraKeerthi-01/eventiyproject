import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateeventService {
  private URL = 'http://localhost:9091/api/organizer';
  constructor(private http:HttpClient) { }
  updateEvent(event:Event):Observable<any>{
    return this.http.put(this.URL+"/updateevent",event,{responseType:"json"})
  }
}
