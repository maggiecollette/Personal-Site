import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleSolitaireComponent } from './marble-solitaire.component';

describe('MarbleSolitaireComponent', () => {
  let component: MarbleSolitaireComponent;
  let fixture: ComponentFixture<MarbleSolitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleSolitaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleSolitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
