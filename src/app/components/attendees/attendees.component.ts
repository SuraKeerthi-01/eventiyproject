import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/Attendees';
import { AttendeeserviceService } from 'src/app/services/attendeeservice.service';
import { Event } from 'src/app/Event';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit{

  attendeeData:Attendee[]=[];
  events:Event[];
  searchQuery="";
  filteredAttendee;
  constructor(private attendeeService: AttendeeserviceService) {
    this.attendeeService.getAttendeeData().subscribe(data => {
      this.attendeeData = data;
      // return this.attendeeData;
      console.log('Attendees:', data[0]); // Check the console for the fetched data
    });

   }

  ngOnInit(): void {
    this.filteredAttendee=this.attendeeData;
  }
  

  suspendfunction(o:Attendee):void{
      o.isSuspended=true;
    }
  
    activefunction(o:Attendee):void{
      o.isSuspended=false;
    }

    getevents(a:Attendee):void{
      console.log("Attandee",a[0]);
      this.attendeeService.getEvnetbyAttendeeId(a[0]).subscribe((response)=>
        //console.log(response);
      this.events=response);
      console.log("attendee Id",this.events);
      
    
    }


    filterfunction(): void {
      if (this.searchQuery.trim() === '') {
        this.filteredAttendee = [...this.attendeeData]; // If no search query, show all events
        
      } else {
        this.filteredAttendee = this.attendeeData.filter(event =>
          event.attendeeName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.attendeeEmail.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.attendeeId.toString().includes(this.searchQuery.toLowerCase()) 
          //console.log("sjdhuwhes",event[0])
        );
      }
    }
}
