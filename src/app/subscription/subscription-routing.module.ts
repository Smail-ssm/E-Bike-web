import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPurchasesComponent } from './users-purchases/users-purchases.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [
  { path: '', component: SubscriptionComponent },
  { path: 'subscription-list', component: SubscriptionListComponent },
  { path: 'useres-purchases', component: UsersPurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
