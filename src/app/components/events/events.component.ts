import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlleventsService } from 'src/app/services/allevents.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  eventData:Event[]=[];
  constructor(private route:Router,private service:AlleventsService){
    this.service.getEventData().subscribe((response)=>{
      this.eventData=response;
      console.log(this.eventData);
    });
  
  }


}
