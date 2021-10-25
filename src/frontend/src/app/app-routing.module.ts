import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewPetFormComponent } from './components/pets/new-pet-form/new-pet-form.component';
import { PetsListComponent } from './components/pets/pets-list/pets-list.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'pets', component: PetsListComponent, pathMatch: 'full' },
   { path: 'pets/create', component: NewPetFormComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: '**', redirectTo: 'login' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
