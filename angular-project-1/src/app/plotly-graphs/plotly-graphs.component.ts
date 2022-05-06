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
      { x: [1, 2, 3, 4, 5, 6], y: [2, 6, 3, 0, 5, 7], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3, 4, 5, 6], y: [2, 5, 3, 8, 5, 4], type: 'bar' },
    ],
    layout: { width: 650, height: 450, title: 'A Fancy Plot' },
  }


  // Bar Chart
  public Barchart = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: { title: 'BarPlot', width: 650, height: 450 },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  // Line chart
  LineChart = {
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: { title: 'Scatter Plot', width: 650, height: 450 },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!',
      editable: true
    },
    
  }

  //basic pie-chart
  PieChart = {
    data: [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }],

    layout: { title: 'Pie Plot', height: 450, width: 650 },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }

  // water fall charts
  WaterFallcharts = {
    data: [
      {
        name: "2018",
        type: "waterfall",
        orientation: "v",
        measure: [
          "relative",
          "relative",
          "total",
          "relative",
          "relative",
          "total"
        ],
        x: [
          "Sales",
          "Consulting",
          "Net revenue",
          "Purchases",
          "Other expenses",
          "Profit before tax"
        ],
        textposition: "outside",
        text: ["+60", "+80", "", "-40", "-20", "Total"],
        y: [60, 80, 0, -40, -20, 0],
        connector: {
          line: {
            color: "rgb(63, 63, 63)"
          }
        },
      }
    ],
    layout: {
      title: {
        text: "Profit and loss statement 2018"
      },
      xaxis: {
        type: "category"
      },
      yaxis: {
        type: "linear"
      },
      autosize: true,
      showlegend: true
    },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }

  // simple inset graph
  trace1 = {
    x: [1, 2, 3],
    y: [4, 3, 2],
    type: 'scatter',
  }
  trace2 = {
    x: [20, 30, 40],
    y: [30, 40, 50],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter'
  }
  InsetGraph = {
    data: [
      this.trace1, this.trace2
    ],
    layout: {
      yaxis2: {
        domain: [0.6, 0.95],
        anchor: 'x2'
      },
      xaxis2: {
        domain: [0.6, 0.95],
        anchor: 'y2'
      }
    },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  //Basic Funnel Plot
  BasicFunnelPlot = {
    data :[{ type: 'funnel', y: ["Website visit", "Downloads", "Potential customers", "Invoice sent", "Closed delas"], x: [13873, 10533, 5443, 2703, 908], hoverinfo: 'x+percent previous+percent initial' }],
    layout : { margin: { l: 150 }, width: 600, height: 500 , title: {
      text: "Basic Funnel Plot"
    },},
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  // making static chart
  
  ngOnInit(): void {
  }

}
