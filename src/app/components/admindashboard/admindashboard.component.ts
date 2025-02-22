import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AttendeeserviceService } from 'src/app/services/attendeeservice.service';
import { EventServiceService } from 'src/app/services/Eventservice.service';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';
import { OrganizerServiceService } from 'src/app/services/organizer-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  @Input()
  notificationCount:number;
  @Input()
  notificationMsg: string[]=[];
  @Output()
  notificationsViewed =new EventEmitter<void>();
  shownotificationMessages = false;

  search:string="";
  filteredsearch:string[]=[];
  constructor(private route:Router,private notification:NotificationserviceService,private attendee:AttendeeserviceService,private organizer:OrganizerServiceService,private events:EventServiceService){
    this.notification.getNotificationCount().subscribe(count =>{
      this.notificationCount=count;
    })
  }
  alertfunction():void{
    this.route.navigate(['/alerts']);
  }

  // addNotification(){
  //   this.notification.addNotification();
  //   this.shownotificationMessages= !this.shownotificationMessages;
  //   if(this.shownotificationMessages){
  //     this.notificationsViewed.emit();
  //   }
  //   this.notificationCount=0;
    
  // }
  
  filterfunction():void{
    
  }
  // showNotifications():void{
  //   this.shownotificationMessages=true;
  //   this.notificationCount=0;
  //   this.notificationsViewed.emit();
  // }
}
