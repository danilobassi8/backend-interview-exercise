import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pets-filters',
  templateUrl: './pets-filters.component.html',
  styleUrls: ['./pets-filters.component.scss'],
})
export class PetsFiltersComponent {
  constructor() {}

  @Output() filterEmitter = new EventEmitter<any>();

  minAgeFilter;
  maxAgeFilter;
  nameFilter;

  validateMaxAge() {
    if (!this.maxAgeFilter) return;

    //Validate max age is not more than 100
    this.maxAgeFilter = Math.min(this.maxAgeFilter, 100);

    //Validate max age is not negative
    this.maxAgeFilter = Math.max(this.maxAgeFilter, 0);

    //Validate max age is not less than min age
    if (this.maxAgeFilter < this.minAgeFilter) {
      this.minAgeFilter = this.maxAgeFilter;
    }
  }

  validateMinAge() {
    if (!this.minAgeFilter) return;

    //Validate min age is not more than 100
    this.minAgeFilter = Math.min(this.minAgeFilter, 100);

    //Validate min age is not negative
    this.minAgeFilter = Math.max(this.minAgeFilter, 0);

    //Validate max age is not less than min age
    if (this.maxAgeFilter < this.minAgeFilter) {
      this.maxAgeFilter = this.minAgeFilter;
    }
  }

  clearFilters() {
    this.maxAgeFilter = this.minAgeFilter = this.nameFilter = undefined;
  }

  //Emits filters to parent component
  filterPets() {
    const filters = {
      nameFilter: this.nameFilter,
      minAgeFilter: this.minAgeFilter,
      maxAgeFilter: this.maxAgeFilter,
    };

    this.filterEmitter.emit(filters);
  }
}
