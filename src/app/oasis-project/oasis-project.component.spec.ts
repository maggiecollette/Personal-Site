import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasisProjectComponent } from './oasis-project.component';

describe('OasisProjectComponent', () => {
  let component: OasisProjectComponent;
  let fixture: ComponentFixture<OasisProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OasisProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OasisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
