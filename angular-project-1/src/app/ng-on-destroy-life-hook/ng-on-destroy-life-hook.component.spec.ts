import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnDestroyLifeHookComponent } from './ng-on-destroy-life-hook.component';

describe('NgOnDestroyLifeHookComponent', () => {
  let component: NgOnDestroyLifeHookComponent;
  let fixture: ComponentFixture<NgOnDestroyLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnDestroyLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnDestroyLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
