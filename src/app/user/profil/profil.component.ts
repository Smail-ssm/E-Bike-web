import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  profileForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(0)]],
    });

    // Initialise le formulaire avec les données de l'utilisateur
    this.userService.user$.subscribe((user) => {
      this.profileForm.patchValue(user);
    });
  }

  updateUser() {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value);
    }
  }
}
