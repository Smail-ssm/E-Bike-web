import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  nomUtilisateur: string="";
  emailUtilisateur: string="";
  passwordUtilisateur: string="";
  confirmPassword: string="";
  constructor() {}

  ngOnInit() {}

  ajouterUtilisateur() {
    
  }
  
  
}