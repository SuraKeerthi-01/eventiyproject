import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Event } from '../event';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-organizerdasnboard',
  templateUrl: './organizerdasnboard.component.html',
  styleUrls: ['./organizerdasnboard.component.css']
})
export class OrganizerdasnboardComponent {
  eventData:Event[];
  searchEvent:Event[];
  searchtext:string;
  
  constructor(private route:Router,private service:ServiceService,private toastService:NotificationService){
    // this.service.getEvents(organizerId).subscribe((response)=>{
    //   this.eventData=response;
    //   console.log(this.eventData);
    //s});
  }

  search():void{
    this.searchEvent=this.eventData.filter((data)=>data.eventTitle.toLowerCase().includes(this.searchtext.toLowerCase()));
    this.searchEvent=this.eventData.filter((data)=>data.eventLocation.toLowerCase().includes(this.searchtext.toLowerCase()));
    this.searchEvent=this.eventData.filter((data)=>data.eventType.toLowerCase().includes(this.searchtext.toLowerCase()));
  }

  dashboard():void{
    this.route.navigate(['/dashboard']);
  }
  alerts():void{
    this.route.navigate(['/alerts']);
  }

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
