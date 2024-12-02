// @ts-nocheck

// Example 1: Set timeline stepping to 'rate'
if (reearth.timeline.setStepType) {
  reearth.timeline.setStepType("rate");
  console.log("Timeline step type set to 'rate'.");
} else {
  console.log("The setStepType method is not available.");
}

// Example 2: Set timeline stepping to 'fixed'
reearth.timeline.setStepType?.("fixed");
console.log("Timeline step type set to 'fixed'.");

// Example 3: Set timeline step type dynamically based on data requirements
const requiresContinuousUpdates = true;

if (reearth.timeline.setStepType) {
  if (requiresContinuousUpdates) {
    reearth.timeline.setStepType("rate");
    console.log("Timeline step type dynamically set to 'rate'.");
  } else {
    reearth.timeline.setStepType("fixed");
    console.log("Timeline step type dynamically set to 'fixed'.");
  }
}
