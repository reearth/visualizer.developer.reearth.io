// @ts-nocheck

// Example 1: Log the step type of the timeline
if (reearth.timeline.stepType) {
  console.log("Timeline Step Type:", reearth.timeline.stepType);
} else {
  console.log("Timeline step type is not set.");
}

// Example 2: Set the step type to 'rate' for continuous progression
reearth.timeline.stepType = "rate";
console.log("Timeline step type set to 'rate'.");

// Example 3: Set the step type to 'fixed' for discrete steps
reearth.timeline.stepType = "fixed";
console.log("Timeline step type set to 'fixed'.");
