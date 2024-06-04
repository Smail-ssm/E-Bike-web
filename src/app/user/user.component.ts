import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  filteredUserList: User[] = [];
  searchQuery: string = '';
  userObj: any = {
    name: '',
    email: '',
    password: '',
  };
  idUser: string = '';
  confirmPassword: string = '';
  passwordUtilisateur: string = '';
  emailUtilisateur: string = '';
  nomUtilisateur: string = '';

  constructor(private userService: DataService) {}

  ngOnInit() {
    this.getAllUseres();
  }

  //get All User
  getAllUseres() {
    this.userService.getAllUsers().subscribe(
      (res: any) => {
        this.userList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.filterUsers(); // Appliquer le filtre initialement
        console.log('Liste des utilisateurs', this.userList); // Déplacez le console.log à l'intérieur du bloc de succès
      },
      (err) => {
        alert('Erreur lors de la récupération des données');
      }
    );
  }

  //reset form
  resetForm() {
    this.confirmPassword = '';
    this.passwordUtilisateur = '';
    this.emailUtilisateur = '';
    this.nomUtilisateur = '';
  }

  // add User
  addUser() {
    if (
      this.nomUtilisateur == '' ||
      this.emailUtilisateur == '' ||
      this.passwordUtilisateur == ''
    ) {
      alert('Veuillez remplir tous les champs');
      return; // Exit early if required fields are empty
    }

    if (this.passwordUtilisateur != this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    this.userObj.name = this.nomUtilisateur; // Populate user object with form data
    this.userObj.email = this.emailUtilisateur;
    this.userObj.password = this.passwordUtilisateur;
    console.log('password' + this.passwordUtilisateur);
    console.log('confirm' + this.confirmPassword);

    this.userService
      .addUser(this.userObj) // Call addUser service
      .then(() => {
        Swal.fire('Succès!', 'Utilisateur créé avec succès!', 'success');
        this.resetForm(); // Call resetForm function to clear the form (implement below)
        console.log(this.userObj);
      });
  }

  // Méthode pour filtrer(FIND) les utilisateurs en fonction de la recherche

  filterUsers() {
    if (this.isSearchDirty()) {
      this.filteredUserList = this.userList.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredUserList = this.userList;
    }
  }
  // Méthode pour filtrer les utilisateurs en fonction de la recherche
  /*  filterUsers() {
    if (this.isSearchDirty()) {
      // Vérifier si le champ de recherche est sale (dirty)
      this.filteredUserList = this.userList.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredUserList = this.userList; // Afficher tous les utilisateurs si le champ de recherche n'est pas sale
    }
  } */

  // Méthode pour vérifier si le champ de recherche est sale (dirty)
  isSearchDirty(): boolean {
    return !!this.searchQuery.trim(); // Vérifie si le champ de recherche contient du texte
  }

  // update User
  updateUser(user: User) {}

  // get user par id

  // delete User
  deleteUser(user: User) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment supprimer ' + user.name + ' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService
          .deleteUser(user)
          .then(() => {
            Swal.fire(
              'Supprimé!',
              "L'utilisateur a été supprimé avec succès.",
              'success'
            );
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la suppression de l'utilisateur :",
              error
            );
          });
      }
    });
  }
}
