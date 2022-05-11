import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentCheckedLifeHookComponent } from './ng-after-content-checked-life-hook.component';

describe('NgAfterContentCheckedLifeHookComponent', () => {
  let component: NgAfterContentCheckedLifeHookComponent;
  let fixture: ComponentFixture<NgAfterContentCheckedLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAfterContentCheckedLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterContentCheckedLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
