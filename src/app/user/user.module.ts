import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListuserComponent } from './listuser/listuser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, ListuserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
