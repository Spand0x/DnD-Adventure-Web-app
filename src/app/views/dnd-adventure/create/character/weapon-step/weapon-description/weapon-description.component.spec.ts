import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDescriptionComponent } from './weapon-description.component';

describe('WeaponDescriptionComponent', () => {
  let component: WeaponDescriptionComponent;
  let fixture: ComponentFixture<WeaponDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
