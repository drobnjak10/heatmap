window.saveDataAcrossSessions = true;

var heatmapInstance = h337.create({
  // only container is required, the rest will be defaults
  container: document.querySelector(".heatmap"),
});

function createHeatMapChart(x, y) {
  heatmapInstance.setDataMax(50);

  heatmapInstance.addData({
    x,
    y,
    value: 20,
  });
  //heatmapInstance.setData(data);
}

webgazer.setRegression("ridge");

webgazer
  .setGazeListener(function (data, elapsedTime) {
    if (data == null) {
      return;
    }

    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport

    createHeatMapChart(xprediction, yprediction);
  })
  .begin();
