import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationModule } from './authentification/authentification.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ScooterModule } from './scooter/scooter.module';
import { BatteriesModule } from './batteries/batteries.module';
import { ClientsComponent } from './clients/clients.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashbordComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthentificationModule,
    SubscriptionModule,
    ScooterModule,
    BatteriesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
