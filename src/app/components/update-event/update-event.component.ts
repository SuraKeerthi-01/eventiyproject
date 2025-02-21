import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlleventsService } from 'src/app/services/allevents.service';
import { Event } from 'src/app/event';
import { UpdateeventService } from 'src/app/services/updateevent.service';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit{

  // event: Event[];
  // message:string;
  // searchtext:string;

  @Input()
  event:Event;
  @Output()
  updateEvent=new EventEmitter<Event>();

  constructor(private alleventsservice:AlleventsService,private updateService:UpdateeventService){
    this.event=new Event();
    this.updateEvent.emit(this.event);
  }
  ngOnInit(): void {
    
    // this.loadEvents();
  }
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

  update(event):void{
    this.updateService.updateEvent(event).subscribe((data)=>{
      this.event=data;
      console.log(this.event);
    })
  }

}
