import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-pet-form',
  templateUrl: './new-pet-form.component.html',
  styleUrls: ['./new-pet-form.component.scss'],
})
export class NewPetFormComponent {
  constructor(private petsService: PetsService, private router: Router) {}

  // Set max date user can choose
  maxDate = new Date();

  petForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl(Validators.required),
    isAproximate: new FormControl(false),
  });

  createPet(): void {
    this.petsService.createPet(this.petForm.value).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Welcome ${this.petForm.get('name').value}!`,
          showConfirmButton: true,
        }).then(() => {
          // Reset petForm values and validators
          this.petForm.reset();

          Object.keys(this.petForm.controls).forEach((key) => {
            this.petForm.get(key).setErrors(null);
          });
        });
      },

      (err) => {
        if (err.status != 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with the server!',
          }).then(() => this.router.navigateByUrl(''));
        }
      }
    );
  }
}
