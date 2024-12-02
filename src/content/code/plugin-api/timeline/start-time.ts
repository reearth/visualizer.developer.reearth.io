// @ts-nocheck

// Example: Check and log the timeline's start time
if (reearth.timeline.startTime) {
  console.log("Timeline Start Time:", reearth.timeline.startTime.toISOString());
} else {
  console.log("Timeline Start Time is not set.");
}
