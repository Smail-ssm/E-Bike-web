import { Injectable } from '@angular/core';
import { AngularFirestore } from '@Angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ServiceuserService {
  constructor(private angularFireStore: AngularFirestore) {}

  //getAll user
  getAllUser() {
    return this.angularFireStore.collection('/user').snapshotChanges();
  }
}
