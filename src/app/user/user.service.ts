import { AngularFirestore } from '@Angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private angularFireStore: AngularFirestore) {}

  //add user
  addUser(user: User) {
    user.id = this.angularFireStore.createId();
    return this.angularFireStore.collection('/user').add(user);
  }

  //getAll user
  getAllUser() {
    return this.angularFireStore.collection('/user').snapshotChanges();
  }

  //delete user
  deleteUser(user: User) {
    return this.angularFireStore.doc('/user/' + user.id).delete();
  }

  //update user

  updateUser(user: User) {
    this.deleteUser(user);
    this.addUser(user);
  }
}
