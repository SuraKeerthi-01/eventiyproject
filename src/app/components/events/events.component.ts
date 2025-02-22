import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Event } from 'src/app/Event';
import { EventServiceService } from 'src/app/services/Eventservice.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  eventData:Event[]=[];
  constructor(private route:Router,private service:EventServiceService){
    this.service.getEventData().subscribe((response)=>{
      this.eventData=response;
      return this.eventData;
    });
  
  }

  cancelFunction(e:Event):void{
      e.isSuspended=true;
    }
  
  updatefunction(e:Event):void{
    e.isSuspended=false;
  }

}
