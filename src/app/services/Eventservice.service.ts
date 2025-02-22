import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  URL="http://localhost:9091/api/admin/events";
  constructor(private http:HttpClient) { }

  getEventData():Observable<any[]>{
  return this.http.get<any[]>(this.URL);
  }
}
