import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlleventsService } from 'src/app/services/allevents.service';
import { UpdateeventService } from 'src/app/services/updateevent.service';
import { Event } from 'src/app/event'; 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  //event: Event[]=[];
  //searchtext:string;
  eventData:Event[]=[];
  selectedEvent:Event;

    constructor(private route:Router,private deleteservice:UpdateeventService,private alleventsservice:AlleventsService){
      this.alleventsservice.getEventData().subscribe((response)=>{
        this.eventData=response;
        console.log(this.eventData);
      });
    }

    updateEvent(event:Event):void{
      //this.route.navigate(['/updateEvents']);
      // this.events.filter((data)=>data.eventTitle.toLowerCase().includes(this.searchtext.toLowerCase()));
      
      this.selectedEvent=event;
      
      // console.log(this.event);
        // console.log(this.searchedevent);
    }
   
    //constructor(private alleventsservice:AlleventsService,private updateService:UpdateeventService){}
  //   ngOnInit(): void {
  //     this.loadEvents();
  //   }
  //   searchedevent:Event[]=[];
  //   events:Event[]=[];
    
  //   loadEvents():void{
  //     this.alleventsservice.getEventData().subscribe((response)=>{
  //       this.events=response;
  //       //console.log(this.events);
  //   });
  // }
  
    // searchFunction():void{
    //     this.searchedevent=this.events.filter((data)=>data.eventTitle.toLowerCase().includes(this.searchtext.toLowerCase()));
    //     this.event=this.searchedevent;
    //     console.log(this.searchedevent);
    // }
  
    // update(event):void{
    //   this.updateService.updateEvent(event).subscribe((data)=>{
    //     this.event=data;
    //     console.log(this.event);
    //   })
    // }
  
}
