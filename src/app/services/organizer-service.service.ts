import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizer } from '../Organizer';

@Injectable({
  providedIn: 'root'
})
export class OrganizerServiceService {

  URL="http://localhost:9091/api/admin/getallorganizers";
  
  constructor(private http:HttpClient) { }

  getData():Observable<any[]>{
      return this.http.get<any[]>(this.URL);
    }

    updateOrganizerStatus(organizerId,suspend:boolean):Observable<any>{
    const suspendURL=`http://localhost:9091/api/admin/organizer/${organizerId}/suspend?suspend=${suspend}`;
      return this.http.post(suspendURL,organizerId);
    }

    
    
    getEvnetbyOrganizerId(organizerId):Observable<any[]>{
      const eventsURL=`http://localhost:9091/api/admin/eventsByOrganizerId/${organizerId}`;
      return this.http.get<any[]>(eventsURL);
    }
}
