import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectNeuComponent } from './connect-neu.component';

describe('ConnectNeuComponent', () => {
  let component: ConnectNeuComponent;
  let fixture: ComponentFixture<ConnectNeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectNeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectNeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
