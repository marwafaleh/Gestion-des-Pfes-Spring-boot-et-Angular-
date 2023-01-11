import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPfeComponent } from './modifier-pfe.component';

describe('ModifierPfeComponent', () => {
  let component: ModifierPfeComponent;
  let fixture: ComponentFixture<ModifierPfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPfeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
