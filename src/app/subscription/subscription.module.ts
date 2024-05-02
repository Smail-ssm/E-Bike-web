import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';

@NgModule({
  declarations: [SubscriptionComponent, SubscriptionListComponent],
  imports: [CommonModule, SubscriptionRoutingModule, RouterModule],
})
export class SubscriptionModule {}
