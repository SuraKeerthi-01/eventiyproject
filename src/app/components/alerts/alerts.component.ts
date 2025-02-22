import { Component } from '@angular/core';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  notificationCount:number;

  constructor(private notificationService: NotificationserviceService){
    this.notificationService.getNotificationCount().subscribe(count =>{
      this.notificationCount=count;
    })
  }

  handleNotificationViewed():void{
    this.notificationCount=0;
  }
}
