import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/Attendees';
import { AttendeeserviceService } from 'src/app/services/attendeeservice.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit{

  attendeeData:Attendee[]=[];


  constructor(private attendeeService: AttendeeserviceService) {
    this.attendeeService.getAttendeeData().subscribe(data => {
      this.attendeeData = data;
      // return this.attendeeData;
      console.log('Attendees:', data[0].attendeeId); // Check the console for the fetched data
    });

   }

  ngOnInit(): void {
    
  }
  

  suspendfunction(o:Attendee):void{
      o.isSuspended=true;
    }
  
    activefunction(o:Attendee):void{
      o.isSuspended=false;
    }

}
