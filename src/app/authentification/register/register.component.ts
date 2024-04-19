import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  //Register
  register() {
    if (this.email == '') {
      alert('email est obligatoir !');
      return;
    } else if (this.password == '') {
      alert('password est obligatoire !');
      return;
    } else {
      this.auth.register(this.email, this.password);

      this.email = '';
      this.password = '';
    }
  }
}
