import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { EventsComponent } from './components/events/events.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'organizer',
    component: OrganizerComponent
  },{
    path:'events',
    component:EventsComponent
  },
  {
    path:'attendees',
    component: AttendeesComponent
  },
  {
    path:'reports',
    component: ReportsComponent
  },
  {
    path:'alerts',
    component:AlertsComponent
  },{
    path:'updateevent',
    component:UpdateEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
