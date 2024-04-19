import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UsersPurchasesComponent } from './users-purchases/users-purchases.component';

const routes: Routes = [
  { path: 'subscrip', component: SubscriptionComponent },
  { path: 'useres-purchases', component: UsersPurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
