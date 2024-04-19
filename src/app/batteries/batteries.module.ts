import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatteriesRoutingModule } from './batteries-routing.module';
import { BatteriesListComponent } from './batteries-list/batteries-list.component';
import { BatteriesModelsListComponent } from './batteries-models-list/batteries-models-list.component';
import { BatteriesStorageListComponent } from './batteries-storage-list/batteries-storage-list.component';
import { BatteriesComponent } from './batteries.component';

@NgModule({
  declarations: [
    BatteriesListComponent,
    BatteriesModelsListComponent,
    BatteriesStorageListComponent,
    BatteriesComponent,
  ],
  imports: [CommonModule, BatteriesRoutingModule],
})
export class BatteriesModule {}
