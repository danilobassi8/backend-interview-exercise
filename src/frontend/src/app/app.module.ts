import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './components/pets/pets-list/pets-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPetFormComponent } from './components/pets/new-pet-form/new-pet-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ReactiveFormsModule } from '@angular/forms';
import { PetsFiltersComponent } from './components/pets/pets-filters/pets-filters.component';
import { LoginComponent } from './components/login/login.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
   declarations: [
      AppComponent,
      PetsListComponent,
      NavbarComponent,
      NewPetFormComponent,
      PetsFiltersComponent,
      LoginComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatCardModule,
      MatCheckboxModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatIconModule,
      MatExpansionModule,
      NgHttpLoaderModule.forRoot(),
      MatTooltipModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
