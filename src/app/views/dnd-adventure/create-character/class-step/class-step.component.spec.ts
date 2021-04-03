import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStepComponent } from './class-step.component';

describe('ClassStepComponent', () => {
  let component: ClassStepComponent;
  let fixture: ComponentFixture<ClassStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
