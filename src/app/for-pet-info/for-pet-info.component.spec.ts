import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPetInfoComponent } from './for-pet-info.component';

describe('ForPetInfoComponent', () => {
  let component: ForPetInfoComponent;
  let fixture: ComponentFixture<ForPetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
