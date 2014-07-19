function stepFactory(stepJSONs) {
  var numSteps = stepJSONs.length
  var stepObjects = []
  for(var i=0; i<numSteps; i++) {
    var stepObj = new StepModel(stepJSONs[i])
    stepObjects.push(stepObj)
  }
  return stepObjects
}