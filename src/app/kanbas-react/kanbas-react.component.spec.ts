import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbasReactComponent } from './kanbas-react.component';

describe('KanbasReactComponent', () => {
  let component: KanbasReactComponent;
  let fixture: ComponentFixture<KanbasReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbasReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbasReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
