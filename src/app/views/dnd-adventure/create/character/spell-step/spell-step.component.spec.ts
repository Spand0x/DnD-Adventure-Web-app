import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellStepComponent } from './spell-step.component';

describe('SpellComponent', () => {
  let component: SpellStepComponent;
  let fixture: ComponentFixture<SpellStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
