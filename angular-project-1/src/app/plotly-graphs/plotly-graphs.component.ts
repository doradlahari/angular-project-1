import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-graphs',
  templateUrl: './plotly-graphs.component.html',
  styleUrls: ['./plotly-graphs.component.sass'],
})
export class PlotlyGraphsComponent implements OnInit {

  constructor() { }

  public Fancy = {
    data: [
        { x: [1, 2, 3, 4, 5, 6], y: [2, 6, 3, 0, 5, 7], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3, 4, 5, 6], y: [2, 5, 3,8, 5, 4], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'},
  }


    // Bar Chart
   public Barchart={
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: {title: 'BarPlot',width: 320,height: 240}
  }


  // Line chart
  LineChart ={
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: {title: 'Scatter Plot',width: 320,height: 240}
  }


  ngOnInit(): void {
  }

}
