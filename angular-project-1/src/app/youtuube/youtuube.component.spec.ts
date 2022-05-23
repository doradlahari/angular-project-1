import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutuubeComponent } from './youtuube.component';

describe('YoutuubeComponent', () => {
  let component: YoutuubeComponent;
  let fixture: ComponentFixture<YoutuubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutuubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutuubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
