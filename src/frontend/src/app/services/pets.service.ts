import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class PetsService {
   constructor(private http: HttpClient) {}

   url = `http://localhost:8000/api/pets/`;

   deletePet(petId: string): Observable<any> {
      return this.http.delete(`${this.url}${petId}`);
   }

   createPet(pet: any): Observable<any> {
      const body = {
         name: pet.name,
         birth_date: pet.birthDate.toISOString().slice(0, 10),
         is_birth_approximate: pet.isAproximate,
      };

      return this.http.post(this.url, body);
   }

   // Gets pets based on filters and page sent
   findPets(filters: any = {}, page = 1): Observable<any> {
      let params = new HttpParams().set('page', page);

      // Set param 'name'
      if (filters.nameFilter != undefined) {
         params = params.append('name', filters.nameFilter);
      }

      const today = new Date();
      const currentYear = today.getFullYear();

      // Set param 'max_birth_date' param
      if (filters.minAgeFilter != undefined) {
         const maxBirthDate = `${currentYear - filters.minAgeFilter}-${
            today.getMonth() + 1
         }-${today.getDate()}`;

         params = params.append('max_birth_date', maxBirthDate);
      }

      // Set param 'min_birth_date' param
      if (filters.maxAgeFilter != undefined) {
         // Add 1 to maxAge so the filter is inclusive
         const minBirthDate = `${currentYear - (filters.maxAgeFilter + 1)}-${
            today.getMonth() + 1
         }-${today.getDate()}`;

         params = params.append('min_birth_date', minBirthDate);
      }

      // Http request based on the previously set parameters
      return this.http.get(this.url, {
         params,
      });
   }

   // Calculate pet age based on its date of birth
   getAge(birthDate): number {
      let petBirthDate = new Date(birthDate);
      let today = new Date();
      let age = today.getFullYear() - petBirthDate.getFullYear();
      let monthDiference = today.getMonth() - petBirthDate.getMonth();

      if (
         monthDiference < 0 ||
         (monthDiference === 0 && today.getDate() < petBirthDate.getDate())
      ) {
         age--;
      }

      return age;
   }
}
