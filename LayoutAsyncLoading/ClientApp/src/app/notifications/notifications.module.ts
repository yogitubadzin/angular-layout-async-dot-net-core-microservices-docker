import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsPaymentsComponent } from './clients-payments/clients-payments.component';
import { ClientsEventsComponent } from './clients-events/clients-events.component';
import { ClientsVisitsComponent } from './clients-visits/clients-visits.component';


@NgModule({
  declarations: [ClientsPaymentsComponent, ClientsEventsComponent, ClientsVisitsComponent],
  imports: [
    CommonModule
  ],
  exports: [ClientsPaymentsComponent, ClientsEventsComponent, ClientsVisitsComponent],
})
export class NotificationsModule { }
