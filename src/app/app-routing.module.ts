import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageeventsComponent } from './components/manageevents/manageevents.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EventsComponent } from './components/events/events.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { DeleteeventComponent } from './components/deleteevent/deleteevent.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:'manageevents',
    component:ManageeventsComponent
  },
  {
    path:'addevent',
    component:AddeventComponent
  },{
    path:'attendees',
    component:AttendeesComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'updateEvents',
    component:UpdateEventComponent
  },
  {
    path:'deleteEvents',
    component:DeleteeventComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
