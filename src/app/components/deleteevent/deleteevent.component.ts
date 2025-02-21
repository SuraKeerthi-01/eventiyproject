import { Component } from '@angular/core';
import { AlleventsService } from 'src/app/services/allevents.service';
import { DeleteserviceService } from 'src/app/services/deleteservice.service';
import { Event } from 'src/app/event';
@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent {

  eventData:Event[]=[];
  constructor(private deleteservice:DeleteserviceService,private service:AlleventsService){
    this.service.getEventData().subscribe((response)=>{
      this.eventData=response;
      console.log(this.eventData);
    });
  }

  delete(eventId){
    this.deleteservice.deleteEvent(eventId).subscribe((data)=>{
      alert("Event is deleted");
      this.eventData=this.eventData.filter((data)=>data.eventId!=eventId);
    });
    
  }
}
