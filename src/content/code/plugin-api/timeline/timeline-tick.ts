// @ts-nocheck

// Example: Retrieve and log the current tick value
const tickValue = reearth.timeline.tick?.();
if (tickValue) {
  console.log("Current Tick Value:", tickValue.toISOString());
} else {
  console.log("Timeline tick is not set or the timeline is inactive.");
}
