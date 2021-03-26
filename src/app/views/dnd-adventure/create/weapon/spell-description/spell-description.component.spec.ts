import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDescriptionComponent } from './spell-description.component';

describe('SpellDescriptionComponent', () => {
  let component: SpellDescriptionComponent;
  let fixture: ComponentFixture<SpellDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
