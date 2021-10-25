import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetFormComponent } from './new-pet-form.component';

describe('NewPetFormComponent', () => {
  let component: NewPetFormComponent;
  let fixture: ComponentFixture<NewPetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
