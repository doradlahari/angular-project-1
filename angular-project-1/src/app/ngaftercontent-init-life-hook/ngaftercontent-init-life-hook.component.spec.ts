import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaftercontentInitLifeHookComponent } from './ngaftercontent-init-life-hook.component';

describe('NgaftercontentInitLifeHookComponent', () => {
  let component: NgaftercontentInitLifeHookComponent;
  let fixture: ComponentFixture<NgaftercontentInitLifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgaftercontentInitLifeHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaftercontentInitLifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
