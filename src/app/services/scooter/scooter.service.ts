import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Scooter } from 'src/app/model/scooter';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  constructor(private afs: AngularFirestore) { }

   //add scooter
   addScooter(scooter: Scooter) {
    scooter.id = this.afs.createId();
    return this.afs.collection('/scooters').add(scooter);
  }
  // get all scooters
  getAllScooters() {
    return this.afs.collection('/scooters').snapshotChanges();
  }

  //delete scooter
  deleteScooter(scooter: Scooter) {
    return this.afs.doc('/scooters/' + scooter.id).delete();
  }

  //update scooter
  updateUser(scooter: Scooter) {
    this.deleteScooter(scooter);
    this.addScooter(scooter);
  }
}
