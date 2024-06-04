import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { UserComponent } from './user.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'list-users', component: ListuserComponent },
  { path: 'profil-users', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
