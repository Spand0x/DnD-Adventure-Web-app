import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStepComponent } from './weapon-step.component';

describe('ItemsStepComponent', () => {
  let component: WeaponStepComponent;
  let fixture: ComponentFixture<WeaponStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
