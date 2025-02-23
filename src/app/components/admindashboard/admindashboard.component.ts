import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Event';
import { AttendeeserviceService } from 'src/app/services/attendeeservice.service';
import { EventServiceService } from 'src/app/services/Eventservice.service';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';
import { OrganizerServiceService } from 'src/app/services/organizer-service.service';
import { SearchService } from 'src/app/services/search.service';

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

  
  filteredsearch:Event[]=[];
  eventData:Event[];
  constructor(private route:Router,private notification:NotificationserviceService,private attendee:AttendeeserviceService,private searchService:SearchService,private events:EventServiceService){
    this.events.getEventData().subscribe((response)=>{
      this.eventData=response;
      console.log(this.eventData);
    });
    
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
  
  
  
  // showNotifications():void{
  //   this.shownotificationMessages=true;
  //   this.notificationCount=0;
  //   this.notificationsViewed.emit();
  // }


  isUserDetailsVisible: boolean = false; // Toggle visibility of user details
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    address: '1234 Main St, City, Country'
  };

  profile(event: MouseEvent) {
    // Prevent the click event on the user icon from triggering the document click listener
    event.stopPropagation();
    this.isUserDetailsVisible = !this.isUserDetailsVisible;
  }

  // Close the card if click happens outside
  @HostListener('document:click', ['$event'])
  closeCard(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    
    if (this.isUserDetailsVisible && 
        !clickedElement.closest('.user-details-card') && 
        !clickedElement.closest('.user-icon-container')) {
      this.isUserDetailsVisible = false;
    }
  }

  // Stop propagation of click events when inside the card
  stopClickPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

}
