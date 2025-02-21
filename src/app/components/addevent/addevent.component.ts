import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/event';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent {


  // addEventForm:FormGroup;
  
  // constructor(private form1:FormBuilder,private route:Router,private eventservice:EventsService){
  //   this.addEventForm=this.form1.group({
  //      eventTitle:new FormControl('',[Validators.required]),
  //      eventStartTime:new FormControl('',[Validators.required]),
  //      eventEndTime:new FormControl('',[Validators.required]),
  //      eventLocation:new FormControl('',[Validators.required]),
  //      eventPrice:new FormControl('',[Validators.required]),
  //      eventType:new FormControl('',[Validators.required]),
  //      totalTickets:new FormControl('',[Validators.required]),
  //      eventDescription:new FormControl('',[Validators.required]),
  //   })
  // }


  event: Event = {
    eventTitle: '',
    eventStartTime: new Date(),
    eventEndTime: new Date(),
    eventLocation: '',
    eventPrice: 0,
    eventType: '',
    totalTickets: 0,
    eventDescription: '',
    eventId: 0,
    totalReceivedAmount: 0,
    isSuspended: false,
    payToPlatform: 0
  };
  
  constructor(private router: Router, private eventService: EventsService,private h:HttpClient) {}

  onSubmit(addEventForm: any): void {
    if (addEventForm.valid) {
      console.log('Event:', this.event);
      var event2:Event = this.event;
      console.log(event2);
      // this.h.post<any>("http://localhost:9091/api/organizer/addevent",event2).subscribe((r)=>{
      //   console.log("HAppy birthday "+r);
      // });
      this.eventService.addEvent(event2).subscribe(response => {
        console.log('Event created successfully:', response);
        this.event=response;
      });
    }

  }

  next():void{
    this.router.navigate(['/payment']);
  }

}
