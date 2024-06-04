import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: any;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  user$ = this.userSubject.asObservable();
  constructor() {}

  updateUser(user: Partial<User>) {
    this.userSubject.next({ ...this.userSubject.value, ...user });
  }
}
