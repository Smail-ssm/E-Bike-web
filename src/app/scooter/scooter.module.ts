import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScooterRoutingModule } from './scooter-routing.module';
import { ScooterListComponent } from './scooter-list/scooter-list.component';
import { ModelListComponent } from './model-list/model-list.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { ScooterComponent } from './scooter.component';

@NgModule({
  declarations: [
    ScooterListComponent,
    ModelListComponent,
    MapComponent,
    ScooterComponent,
  ],
  imports: [CommonModule, ScooterRoutingModule, RouterModule],
})
export class ScooterModule {}
