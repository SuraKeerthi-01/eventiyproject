import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { EventsComponent } from './components/events/events.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
// import { NgChartsModule } from 'ng2-charts';
import {  NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    OrganizerComponent,
    EventsComponent,
    AttendeesComponent,
    ReportsComponent,
    DashboardComponent,
    AlertsComponent,
    UpdateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
