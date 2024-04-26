import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from './user.service';
import { ServiceuserService } from './serviceuser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  confirmPassword: string = '';
  passwordUtilisateur: string = '';
  emailUtilisateur: string = '';
  nomUtilisateur: string = '';

  constructor(private authS: AuthService) {}

  ngOnInit(): void {}

  //get All User
}
