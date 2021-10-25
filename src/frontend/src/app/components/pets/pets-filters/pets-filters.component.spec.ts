import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFiltersComponent } from './pets-filters.component';

describe('PetsFiltersComponent', () => {
  let component: PetsFiltersComponent;
  let fixture: ComponentFixture<PetsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
