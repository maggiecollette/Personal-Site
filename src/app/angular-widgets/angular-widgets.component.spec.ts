import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWidgetsComponent } from './angular-widgets.component';

describe('AngularWidgetsComponent', () => {
  let component: AngularWidgetsComponent;
  let fixture: ComponentFixture<AngularWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
