import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {
  URL="http://localhost:9091/api/admin/getallattendees";

  constructor(private http:HttpClient) { }
  
  getAttendeeData():Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }
}
