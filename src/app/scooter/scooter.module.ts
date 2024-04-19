import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScooterRoutingModule } from './scooter-routing.module';
import { ScooterListComponent } from './scooter-list/scooter-list.component';
import { ModelListComponent } from './model-list/model-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [ScooterListComponent, ModelListComponent, MapComponent],
  imports: [CommonModule, ScooterRoutingModule],
})
export class ScooterModule {}
