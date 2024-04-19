import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteriesListComponent } from './batteries-list/batteries-list.component';
import { BatteriesStorageListComponent } from './batteries-storage-list/batteries-storage-list.component';
import { BatteriesModelsListComponent } from './batteries-models-list/batteries-models-list.component';
import { BatteriesComponent } from './batteries.component';

const routes: Routes = [
  {
    path: '',
    component: BatteriesListComponent,
    children: [
      {
        path: 'batteries-storage-list',
        component: BatteriesStorageListComponent,
      },
      { path: 'batteries-model-list', component: BatteriesModelsListComponent },
      // Assurez-vous que les chemins des enfants correspondent également à 'home/dashbord'
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatteriesRoutingModule {}
