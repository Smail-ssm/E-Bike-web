import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      { path: 'dashboard', component: DashbordComponent },

      { path: 'clients', component: ClientsComponent },
      {
        path: 'batteries',
        loadChildren: () =>
          import('./batteries/batteries.module').then((m) => m.BatteriesModule),
      },
      {
        path: 'scooter',
        loadChildren: () =>
          import('./scooter/scooter.module').then((m) => m.ScooterModule),
      },
      {
        path: 'subscription',
        loadChildren: () =>
          import('./subscription/subscription.module').then(
            (m) => m.SubscriptionModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
