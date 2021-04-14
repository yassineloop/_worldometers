
window.onload = function () {

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
  title :{
    text: ""
  },
  data: [{
    type: "line",
    dataPoints: dps
  }]
});
 

var xVal = 0;
var yVal = 100; 
var updateInterval = 6000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

  count = count || 1;

  for (var j = 0; j < count; j++) {
    yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
    dps.push({
      x: xVal,
      y: yVal
    });
    xVal++;
  }

  if (dps.length > dataLength) {
    dps.shift();
  }

  chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);



var chart2 = new CanvasJS.Chart("chartContainer2", {
  animationEnabled: true,
  zoomEnabled: true,
   
  title: {
    text: ""
  },
  axisX: {
    title: "Year",
    valueFormatString: "####",
    interval: 2
  },
  axisY: {
    logarithmic: true, //change it to false
    title: "Infected ",
    titleFontColor: "#6D78AD",
    lineColor: "#6D78AD",
    gridThickness: 0,
    lineThickness: 1,
    labelFormatter: addSymbols
  },
  axisY2: {
    title: "Recoverd",
    titleFontColor: "#51CDA0",
    logarithmic: false, //change it to true
    lineColor: "#51CDA0",
    gridThickness: 0,
    lineThickness: 1,
    labelFormatter: addSymbols
  },
  legend: {
    verticalAlign: "top",
    fontSize: 16,
    dockInsidePlotArea: true
  },
  data: [{
    type: "line",
    xValueFormatString: "####",
    showInLegend: true,
    name: "Recoverd",
    dataPoints: [
      { x: 1994, y: 25437639 },
      { x: 1995, y: 44866595 },
      { x: 1996, y: 77583866 },
      { x: 1997, y: 120992212 },
      { x: 1998, y: 188507628 },
      { x: 1999, y: 281537652 },
      { x: 2000, y: 414794957 },
      { x: 2001, y: 502292245 },
      { x: 2002, y: 665065014 },
      { x: 2003, y: 781435983 },
      { x: 2004, y: 913327771 },
      { x: 2005, y: 1030101289 },
      { x: 2006, y: 1162916818 },
      { x: 2007, y: 1373226988 },
      { x: 2008, y: 1575067520 },
      { x: 2009, y: 1766403814 },
      { x: 2010, y: 2023202974 },
      { x: 2011, y: 2231957359 },
      { x: 2012, y: 2494736248 },
      { x: 2013, y: 2728428107 },
      { x: 2014, y: 2956385569 },
      { x: 2015, y: 3185996155 },
      { x: 2016, y: 3424971237 }
    ]
  },
  {
    type: "line",
    xValueFormatString: "####",
    axisYType: "secondary",
    showInLegend: true,
    name: "Infected",
    dataPoints: [
      { x: 1994, y: 254376 },
      { x: 1995, y: 448665 },
      { x: 1996, y: 775838 },
      { x: 1997, y: 120992 },
      { x: 1998, y: 188507 },
      { x: 1999, y: 281537 },
      { x: 2000, y: 414794 },
      { x: 2001, y: 502292 },
      { x: 2002, y: 665065 },
      { x: 2003, y: 781435 },
      { x: 2004, y: 913327 },
      { x: 2005, y: 103010 },
      { x: 2006, y: 116291 },
      { x: 2007, y: 137322 },
      { x: 2008, y: 157506 },
      { x: 2009, y: 176640 },
      { x: 2010, y: 202320 },
      { x: 2011, y: 223195 },
      { x: 2012, y: 249473 },
      { x: 2013, y: 272842 },
      { x: 2014, y: 295638 },
      { x: 2015, y: 318599 },
      { x: 2016, y: 342497 }
    ]
  }]
});
chart2.render();

function addSymbols(e) {
  var suffixes = ["", "K", "M"];

  var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  if(order > suffixes.length - 1)
    order = suffixes.length - 1;

  var suffix = suffixes[order];
  return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

}
