import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeLifeHookComponent } from './onchange-life-hook.component';

describe('OnchangeLifeHookComponent', () => {
  let component: OnchangeLifeHookComponent;
  let fixture: ComponentFixture<OnchangeLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
