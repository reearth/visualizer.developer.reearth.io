// @ts-nocheck

// Example: Check and log the current timeline time
if (reearth.timeline.currentTime) {
  console.log(
    "Current Timeline Time:",
    reearth.timeline.currentTime.toISOString()
  );
} else {
  console.log("Current Timeline Time is not set.");
}
