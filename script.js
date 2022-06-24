window.saveDataAcrossSessions = true;

var heatmapInstance = h337.create({
  // only container is required, the rest will be defaults
  container: document.querySelector(".heatmap"),
});

function createHeatMapChart(x, y) {
  heatmapInstance.addData({
    x,
    y,
    value: 1,
  });
  //heatmapInstance.setData(data);
}

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  console.log(data)
  createHeatMapChart(data.x, data.y);
}).begin();

//webgazer.showVideoPreview(false).showPredictionPoints(false);

//const myfunc = () => {
//  var heatmapInstance = h337.create({
//    // only container is required, the rest will be defaults
//    container: document.querySelector(".heatmap"),
//  });

//  // now generate some random data
//  var points = [];
//  var max = 0;
//  var width = window.innerWidth;
//  var height = window.innerHeight;
//  var len = 50;

//  let value = 1;
//  while (len--) {
//    var val = Math.floor(Math.random() * 100);
//    value++;
//    max = Math.max(max, val);
//    var point = {
//      value: val,
//    };
//    points.push(point);
//  }
//  // heatmap data format
//  var data = {
//    max: 20,
//    data: arr,
//  };
//  // if you have a set of datapoints always use setData instead of addData
//  // for data initialization
//  heatmapInstance.setData(data);
//};

//myfunc();
