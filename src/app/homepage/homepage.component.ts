import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService, User } from '../user/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  isSidebarOpen = true;
  user!: User;

  constructor(private auth: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  //logout
  logOut() {
    this.auth.logOut();
  }
}
