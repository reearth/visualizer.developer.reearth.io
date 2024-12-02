// @ts-nocheck

// Example: Check and log the timeline's stop time
if (reearth.timeline.stopTime) {
  console.log("Timeline Stop Time:", reearth.timeline.stopTime.toISOString());
} else {
  console.log("Timeline Stop Time is not set.");
}
