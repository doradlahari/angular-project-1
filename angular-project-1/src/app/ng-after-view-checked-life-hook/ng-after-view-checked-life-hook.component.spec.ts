import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewCheckedLifeHookComponent } from './ng-after-view-checked-life-hook.component';

describe('NgAfterViewCheckedLifeHookComponent', () => {
  let component: NgAfterViewCheckedLifeHookComponent;
  let fixture: ComponentFixture<NgAfterViewCheckedLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAfterViewCheckedLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterViewCheckedLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
