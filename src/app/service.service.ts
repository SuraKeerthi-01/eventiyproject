import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getEvents(organizerId):Observable<any[]>{
    const URL=`http://localhost:9091/api/admin/eventsByOrganizerId/${organizerId}`;
    return this.http.get<any[]>(URL);
  }
  

}
