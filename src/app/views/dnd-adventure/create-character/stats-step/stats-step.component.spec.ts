import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsStepComponent } from './stats-step.component';

describe('StatsStepComponent', () => {
  let component: StatsStepComponent;
  let fixture: ComponentFixture<StatsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
