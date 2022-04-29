import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairingPointComponent } from './repairing-point.component';

describe('RepairingPointComponent', () => {
  let component: RepairingPointComponent;
  let fixture: ComponentFixture<RepairingPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairingPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
