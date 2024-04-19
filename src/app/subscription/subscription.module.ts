import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UsersPurchasesComponent } from './users-purchases/users-purchases.component';


@NgModule({
  declarations: [
    SubscriptionComponent,
    UsersPurchasesComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
