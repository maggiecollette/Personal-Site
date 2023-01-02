import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMEComponent } from './ime.component';

describe('IMEComponent', () => {
  let component: IMEComponent;
  let fixture: ComponentFixture<IMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
