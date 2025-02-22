import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizerdasnboardComponent } from './organizerdasnboard/organizerdasnboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageeventsComponent } from './components/manageevents/manageevents.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { EventsComponent } from './components/events/events.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { DeleteeventComponent } from './components/deleteevent/deleteevent.component';
import { UpdateComponent } from './components/update/update.component';
import { AlertsComponent } from './components/alerts/alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    OrganizerdasnboardComponent,
    ManageeventsComponent,
    AddeventComponent,
    AttendeesComponent,
    EventsComponent,
    RevenueComponent,
    PaymentComponent,
    UpdateEventComponent,
    DeleteeventComponent,
    UpdateComponent,
    AlertsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
