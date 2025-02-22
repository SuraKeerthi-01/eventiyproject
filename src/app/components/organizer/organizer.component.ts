import { Component } from '@angular/core';
import { Organizer } from 'src/app/Organizer';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';
import { OrganizerServiceService } from 'src/app/services/organizer-service.service';
import { Event } from 'src/app/Event';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {

  // isSuspended:boolean=false
  data:Organizer[]=[];
  events:Event;
  notificationCount:number=0;
  notificationMsg: string[]=[];
  shownotificationMessages=false;

    // isSuspended:boolean=false;
  constructor(private service:OrganizerServiceService,private notification:NotificationserviceService){
    this.service.getData().subscribe(response => {
    this.data=response;
      return this.data;
    });
    this.notification.getNotificationCount().subscribe(count =>{
      this.notificationCount=count;
    })
  }

  suspendfunction(o:Organizer):void{
    // this.notification.addNotification();
    o.isSuspended=true;
    this.service.updateOrganizerStatus(o[0],true).subscribe(response=>{
     //console.log(o[0]);
     const message=`Organizer ${o[1]} has been suspended.`;
     this.notificationMsg.push(message);
     this.notificationCount++;
      console.log('Organizer suspended',response);
    })
  //   if (o && o.organizerId) {
  //     this.notification.addNotification();
  //     o.isSuspended = true;
  //     this.service.updateOrganizerStatus(o, true).subscribe(response => {
  //       console.log(o.organizerId);
  //         console.log('Organizer suspended:', response);
  //     });
  // } else {
  //     console.error('Organizer object or ID is undefined.');
  // }
  }

  activefunction(o:Organizer):void{
    o.isSuspended=false;
    this.service.updateOrganizerStatus(o[0],false).subscribe(response=>{
      console.log('Organizer activated:',response);
    })
  }

  eventsbyOrganizerid(o:Organizer):void{
    this.service.getEvnetbyOrganizerId(o[0]).subscribe(response=>{
      this.events=response[0]

      console.log(this.events.eventDescription      )
      // console.log(response[0].eventDescription)
      // this.events=response;
      // console.log(this.events[0].eventDescription);
    })
  }

  

}
