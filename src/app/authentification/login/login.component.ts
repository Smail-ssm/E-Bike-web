import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    if (this.email == '') {
      alert('email est obligatoir !');
      return;
    } else if (this.password == '') {
      alert('password est obligatoire !');
      return;
    } else {
      this.auth.Authentification(this.email, this.password);

      this.email = '';
      this.password = '';
    }
  }
}
