import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewInitLifeHookComponent } from './ng-after-view-init-life-hook.component';

describe('NgAfterViewInitLifeHookComponent', () => {
  let component: NgAfterViewInitLifeHookComponent;
  let fixture: ComponentFixture<NgAfterViewInitLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAfterViewInitLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterViewInitLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
