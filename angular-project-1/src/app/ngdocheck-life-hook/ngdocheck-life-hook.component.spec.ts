import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdocheckLifeHookComponent } from './ngdocheck-life-hook.component';

describe('NgdocheckLifeHookComponent', () => {
  let component: NgdocheckLifeHookComponent;
  let fixture: ComponentFixture<NgdocheckLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdocheckLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdocheckLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
