import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  constructor(
    private petsService: PetsService,
    private authService: AuthService,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  currentUser: any;
  canDelete = false;

  displayedColumns: string[] = [
    'name',
    'age',
    'is_birth_approximate',
  ];

  dataSource: MatTableDataSource<any>;

  totalPets: number = 0;
  filters = {};

  ngOnInit(): void {
    this.currentUser = this.authService.getCurretUser();

    // Add delete option column if user is admin
    this.canDelete = this.currentUser.is_admin;
    if (this.canDelete) this.displayedColumns.push('delete');
    this.getPets();
  }

  getPets(): void {
    this.petsService.findPets().subscribe((res: any) => {

      this.dataSource = new MatTableDataSource<any>(res.results);
      this.totalPets = res.count;
    });
  }

  deletePet(pet): void {
    Swal.fire({
      title: 'Do you want to delete this pet?',
      showCancelButton: true,
      confirmButtonText: `Delete`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        this.petsService.deletePet(pet.id).subscribe(
          () => {
            Swal.fire('Done!', `Goodbye ${pet.name}`, 'success');
            this.getPets();
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
    });
  }

  // Searchs pets based on filters set.
  filterPets(filters): void {

    this.filters = filters;
    this.petsService.findPets(this.filters).subscribe(
      (res) => {

        this.dataSource = res.results;
        this.totalPets = res.count;
        this.paginator.firstPage();

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

  // Handles page change event
  pageChanged(event): void {

    this.petsService.findPets(this.filters, event.pageIndex + 1).subscribe(
      (res) => {
        this.dataSource = res.results;
        this.totalPets = res.count;
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
