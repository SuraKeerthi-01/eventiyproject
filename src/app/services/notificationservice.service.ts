import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

  constructor() { }

  private notificationCount=new BehaviorSubject<number>(0);
  private notifications=new Subject<string>();

  notifications$=this.notifications.asObservable();
  private messages:string[]=[];
  private count:number=0;

  getNotificationCount(){
    return this.notificationCount.asObservable();
  }

  addNotification(message:string){
    this.notificationCount.next(this.notificationCount.value+1);
    this.messages.push(message);
    this.count++;
    // this.notifications.next(this.messages);
  }

  clearNotification() {
    this.notificationCount.next(0);
  }


}
