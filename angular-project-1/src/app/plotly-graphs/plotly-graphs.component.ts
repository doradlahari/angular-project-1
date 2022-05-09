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
      showLink: false,
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
      showLink: false,
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

    // layout: { title: 'Pie Plot', height: 450, width: 650 },
    layout: { title: 'Click Here<br>to Edit Chart Title', height: 450, width: 650 },
    config: {
      displaylogo: false,
      showLink: false,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!',
      editable: true
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
      title: 'Create a Static Chart',
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
      showLink: false,
      staticPlot: true,
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
      title: 'Download Chart as SVG instead of PNG',
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
      showLink: false,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  //Basic Funnel Plot
  BasicFunnelPlot = {
    data: [{ type: 'funnel', y: ["Website visit", "Downloads", "Potential customers", "Invoice sent", "Closed delas"], x: [13873, 10533, 5443, 2703, 908], hoverinfo: 'x+percent previous+percent initial' }],
    layout: {
      margin: { l: 150 }, width: 600, height: 500, title: {
        text: "Basic Funnel Plot, Always Display the Modebar"
      },
    },
    config: {
      displaylogo: false,
      scrollZoom: true,
      showLink: false,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  // heatmap Graph
  Heatmap = {
  data : [
      {
        z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
        type: 'heatmap'
      }
    ],
    layout: {
      margin: { l: 150 }, width: 500, height: 500, 
      title: {
        text: "Heatmap Plot, Hide the Modebar"
      }
    },
    config: {
      displaylogo: false,
      showLink: false,
      displayModeBar: false,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
    
  }


  // Basic Symmetric Error Bars
  BasicSymmetricErrorBars={
    data : [
      {
        x: [0, 1, 2],
        y: [6, 10, 2],
        error_y: {
          type: 'data',
          array: [1, 2, 3],
          visible: true
        },
        type: 'scatter'
      }
    ],
    layout: {
      margin: { l: 150 }, width: 500, height: 500, 
      title: {
        text: "Basic Symmetric Error Bars, Remove ModeBar Buttons"
      }
    },
    config: {
      displaylogo: false,
      showLink: false,
      modeBarButtonsToRemove: ['toImage'],
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  }


  //Indicators
  Indicators={
    data :[
      {
        type: "indicator",
        value: 200,
        delta: { reference: 160 },
        gauge: { axis: { visible: false, range: [0, 250] } },
        domain: { row: 0, column: 0 }
      },
      {
        type: "indicator",
        value: 120,
        gauge: {
          shape: "bullet",
          axis: {
            visible: false,
            range: [-200, 200]
          }
        },
        domain: { x: [0.1, 0.5], y: [0.15, 0.35] }
      },
      {
        type: "indicator",
        mode: "number+delta",
        value: 300,
        domain: { row: 0, column: 1 }
      },
      { type: "indicator", mode: "delta", value: 40, domain: { row: 1, column: 1 } }
    ],
    layout : {
      width: 600,
      height: 400,
      margin: { t: 25, b: 25, l: 25, r: 25 },
      grid: { rows: 2, columns: 2, pattern: "independent" },
      template: {
        data: {
          indicator: [
            {
              title: { text: "Speed ,add mode bar button with custom icon" },
              mode: "number+delta+gauge",
              delta: { reference: 90 }
            }
          ]
        }
      }
    },
    config: {
      displaylogo: false,
      showLink: false,
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
  } 
  // Display the EditChart Link
  DisplayEditChartLink={
    trace1 : {
      x: [0, 1, 2, 3, 4, 5, 6],
      y: [1, 9, 4, 7, 5, 2, 4],
      mode: 'lines+markers',
      type: 'scatter'
    },
    
    data : [this.trace1],
    
     layout : {
      margin: { l: 150 },height: 450, width: 650,
      title: 'Display the Edit Chart Link'
    },
    config :{
      plotlyServerURL: "https://chart-studio.plotly.com"
    }  
  }
  //Customize The EditChart Link
  CustomizeTheEditChartLink={
    data : [{
      z: [[0, 1, 2, 3, 4, 5, 6],
          [1, 9, 4, 7, 5, 2, 4],
          [2, 4, 2, 1, 6, 9, 3]],
      type: 'heatmap'}],
    
    layout:{title: 'Customize The Edit Chart Link Text'},
     config : {
      plotlyServerURL: "https://chart-studio.plotly.com",
      linkText: 'This text is custom!'
    }
    
  }
  // Display Edit in Chart Studio Modebar Button
  DisplayEditChartStudioModebarButton={
     data : [{
      values: [48, 48,2],
      labels: ['work', 'family', 'love'],
      type: 'pie'
    }],
    
    layout : {
        title: 'Show Edit in Chart Studio Modebar Button'
    },
    
    config :{
      showEditInChartStudio: true,
      plotlyServerURL: "https://chart-studio.plotly.com"
    }
  }
  // Change the Default Locale
  ChangeDefaultLocale={
    trace1 : {
      type: "scatter",
      mode: "lines",
      x: ['2018-01-01', '2018-08-31'],
      y: [10, 10],
      line: {color: '#17BECF'}
    },
     trace2 : {
      type: "scatter",
      mode: "lines",
      x: ['2018-01-01', '2018-08-31'],
      y: [10,10],
      line: {color: '#7F7F7F'}
    },
    data : [this.trace1,this.trace2],
    
     layout : {
      title: 'Custom Locale',
    },
    config : {locale: 'fr'}
  }


  // Hide the Plotly Logo on the Modebar
  HidePlotlyLogoOnModebar={
    race1 : {
      x:['trees', 'flowers', 'hedges'],
      y: [90, 130, 40],
      type: 'bar'
  },
  data : [this.trace1],
  layout : {
      title: 'Hide the Plotly Logo on the Modebar',
      showlegend: false
  },
  config : {displaylogo: true}
  }
  // Making a Responsive Chart
  MakingResponsiveChart={
    trace1 :{
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
          color: '#C8A2C8',
          line: {
              width: 2.5
          }
      }
  },
  data: [this. trace1 ],
  layout : {
    title: 'Responsive to window size!',
    font: {size: 18}
  },
  config:{
    responsive: true
  }  
  }
  // Double Click Delay 
  DoubleClickDelay={
    data:[{
      type: "bar",
      y: [3, 5, 3, 2],
      x: ["2019-09-02", "2019-10-10", "2019-11-12", "2019-12-22"]
    }],
    layout:{
      title: 'Double Click Delay!',
      xaxis: {type: 'date'}},
    config :{doubleClickDelay: 1000}
    
  }
  ngOnInit(): void {
  }

}
