import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Scooter } from 'src/app/model/scooter';
import { ScooterService } from 'src/app/services/scooter/scooter.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-scooter-list',
  templateUrl: './scooter-list.component.html',
  styleUrls: ['./scooter-list.component.scss']
})
export class ScooterListComponent implements OnInit {
  ajouterScooterForm!:FormGroup;
  scooters:Scooter[]=[];
  allScooters: Scooter[] = [];
  searchQuery:string="";

  constructor(private fb:FormBuilder, private service:ScooterService) { }

  ngOnInit() {

    this.getAllScooter();
    this.ajouterScooterForm = this.fb.group({
      areaScooter: ['', Validators.required],
      numScooter: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      uidScooter: ['', Validators.required],
      modelScooter: ['', Validators.required],
      currentZone: ['', Validators.required],
      statusScooter: ['', Validators.required],
      batteryScooter: ['', Validators.required],
    });
  }

// get all scooters
  getAllScooter() {
    this.service.getAllScooters().subscribe(
      (res: any) => {
        this.allScooters = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.filterScooter(); // Appliquer le filtre initialement
        console.log('Liste des Scooters', this.allScooters); // Déplacez le console.log à l'intérieur du bloc de succès
      },
      (err) => {
        alert('Erreur lors de la récupération des données');
      }
    );
  }


  // add scooter
  addScooter() {
    if (this.ajouterScooterForm.valid) {
      const scooterData = this.ajouterScooterForm.value;
      console.log('Scooter ajouté : ', scooterData);
      this.service
      .addScooter(scooterData) 
      .then(() => {
        Swal.fire('Succès!', 'Scooter créé avec succès!', 'success');
        this.resetForm(); 
        
      });
    } else {
      console.log("Faild ! ")
      this.checkValidationErrors(this.ajouterScooterForm);
    }
  }
  resetForm(): void {
    this.ajouterScooterForm.reset();
  }

  checkValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.get(key);
      if (control?.invalid) {
        alert(`Le champ ${key} est vide ou invalide.`);
      }
    });
  }
 
 // delete Scooter
 deleteScooter(scooter: Scooter) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Voulez-vous vraiment supprimer ' + scooter.modelScooter + ' ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler',
  }).then((result) => {
    if (result.isConfirmed) {
      this.service
        .deleteScooter(scooter)
        .then(() => {
          Swal.fire(
            'Supprimé!',
            "Scooter supprimé avec succès.",
            'success'
          );
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la suppression du Scooter :",
            error
          );
        });
    }
  });
}

  // Méthode pour vérifier si le champ de recherche est sale (dirty)
  isSearchDirty(): boolean {
    return !!this.searchQuery.trim(); // Vérifie si le champ de recherche contient du texte
  }
  // methode search
  filterScooter() {
    if (this.isSearchDirty()) {
      this.scooters = this.allScooters.filter((scooter) =>
        scooter.modelScooter.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.scooters = this.allScooters;
    }
  }


}
