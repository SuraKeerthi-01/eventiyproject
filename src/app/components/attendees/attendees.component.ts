import { Component } from '@angular/core';
import { Attendee } from 'src/app/Attendee';
import { AttendeesService } from 'src/app/services/attendees.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent {

  attendeeData:Attendee[]=[];


  constructor(private attendeeService: AttendeesService) {
    this.attendeeService.getAttendeeData().subscribe(data => {
      this.attendeeData = data;
      // return this.attendeeData;
      console.log('Attendees:', data[0].attendeeId); // Check the console for the fetched data
    });

   }
}
