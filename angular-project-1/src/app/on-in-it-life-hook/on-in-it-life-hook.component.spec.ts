import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInItLifeHookComponent } from './on-in-it-life-hook.component';

describe('OnInItLifeHookComponent', () => {
  let component: OnInItLifeHookComponent;
  let fixture: ComponentFixture<OnInItLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnInItLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnInItLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
