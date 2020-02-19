function calcProgram() {

  var squat = getVarsAt90Percent("squat");
  var deadlift = getVarsAt90Percent("deadlift");
  var bench = getVarsAt90Percent("bench");
  var ohp = getVarsAt90Percent("ohp");
  document.getElementById("results").style.visibility = "visible";
  var weightsCalcPercents = new Array();
  var amrapPercents = new Array(45, 50, 60, 65, 75, 85);
  weightsCalcPercents[0] = new Array(45, 50, 60, 70, 80, 90, 95, 100);
  weightsCalcPercents[1] = new Array(45, 50, 60, 75, 85, 95, 100, 105);
  weightsCalcPercents[2] = new Array(45, 50, 60, 65, 75, 85);

  var squatCalcd = new Array();
  var deadliftCalcd = new Array();
  var benchCalcd = new Array();
  var ohpCalcd = new Array();
  for (x = 0; x < weightsCalcPercents.length; x++) {
    squatCalcd[x] = calcWeek(squat, weightsCalcPercents[x]);
    deadliftCalcd[x] = calcWeek(deadlift, weightsCalcPercents[x]);
    benchCalcd[x] = calcWeek(bench, weightsCalcPercents[x]);
    ohpCalcd[x] = calcWeek(ohp, weightsCalcPercents[x]);
  }
  var output = document.getElementById("results");
  allLifts = new Array(squatCalcd, deadliftCalcd, benchCalcd, ohpCalcd);
  strengthTableCalc(allLifts, Array("squat", "deadlift", "bench", "ohp"));

}

function getVarsAt90Percent(lift) {
    return Math.round(((parseInt(document.getElementById(lift).value) * .9) / 5) * 5);
}

function calcWeek(lift, percents) {
  var calcedLift = new Array()
  for (i = 0; i < percents.length; i++) {
    calcedLift.push(Math.round(lift * (percents[i] / 100) / 5) * 5);
  }
  calcedLift.push(calcedLift[5]);
  return calcedLift;
}

function strengthTableCalc(liftCalcd, liftID) {
  var reps = new Array();
  reps[0] = new Array(5, 5, 3, 3, 3, 3, 3, 3, "AMRAP");
  reps[1] = new Array(5, 5, 3, 5, 3, 1, 1, 1, "AMRAP");
  reps[2] = new Array(5, 5, 3, 5, 5, 5);
  var output = document.getElementById("results");
  for (let lift = 0; lift < liftCalcd.length; lift++) {
    for (let arrayIndex = 0; arrayIndex < 2; arrayIndex++) {
      for (let el = 0; el <= 8; el++) {
        var item = ".d" + String(arrayIndex + 1) + liftID[lift].charAt(0) + String(el + 1);
        if (el == 8) {
          output.querySelector(item).innerHTML = reps[arrayIndex][el] + 'x' + liftCalcd[lift][arrayIndex][3];
        } else {
          output.querySelector(item).innerHTML = reps[arrayIndex][el] + 'x' + liftCalcd[lift][arrayIndex][el];
        }
      }
    }
    for (let smallEl = 0; smallEl < 6; smallEl++) {
      var accItem = "." + String(liftID[lift]) + "Acc" + String(smallEl + 1);
      var itemToUpdate = output.querySelectorAll(accItem);
      for (let itemFound = 0; itemFound < itemToUpdate.length; itemFound++) {
        itemToUpdate[itemFound].innerHTML = reps[2][smallEl] + "x" + liftCalcd[lift][2][smallEl];

      }
    }
  }
}
