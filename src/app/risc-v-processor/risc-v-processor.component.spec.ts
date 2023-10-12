import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RISCVProcessorComponent } from './risc-v-processor.component';

describe('RISCVProcessorComponent', () => {
  let component: RISCVProcessorComponent;
  let fixture: ComponentFixture<RISCVProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RISCVProcessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RISCVProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
