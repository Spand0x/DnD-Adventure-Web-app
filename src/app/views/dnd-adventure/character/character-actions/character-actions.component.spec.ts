import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterActionsComponent } from './character-actions.component';

describe('CharacterActionsComponent', () => {
  let component: CharacterActionsComponent;
  let fixture: ComponentFixture<CharacterActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
