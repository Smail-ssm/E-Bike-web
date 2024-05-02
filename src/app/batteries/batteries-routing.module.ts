import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteriesListComponent } from './batteries-list/batteries-list.component';
import { BatteriesStorageListComponent } from './batteries-storage-list/batteries-storage-list.component';
import { BatteriesModelsListComponent } from './batteries-models-list/batteries-models-list.component';
import { BatteriesComponent } from './batteries.component';

const routes: Routes = [
  { path: '', component: BatteriesComponent },
  { path: 'batteries-list', component: BatteriesListComponent },
  { path: 'batteries-storage-list', component: BatteriesStorageListComponent },
  { path: 'batteries-model-list', component: BatteriesModelsListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatteriesRoutingModule {}
