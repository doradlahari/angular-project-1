import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyGraphsComponent } from './plotly-graphs.component';

describe('PlotlyGraphsComponent', () => {
  let component: PlotlyGraphsComponent;
  let fixture: ComponentFixture<PlotlyGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotlyGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
