// @ts-nocheck

// Example 1: Log the range type of the timeline
if (reearth.timeline.rangeType) {
  console.log("Timeline Range Type:", reearth.timeline.rangeType);
} else {
  console.log("Timeline range type is not set.");
}

// Example 2: Allow the timeline to progress indefinitely
reearth.timeline.rangeType = "unbounded";
console.log("Timeline range type set to 'unbounded'.");

// Example 3: Restrict the timeline to its start and stop times
reearth.timeline.rangeType = "clamped";
console.log("Timeline range type set to 'clamped'.");

// Example 4: Enable bouncing behavior for the timeline
reearth.timeline.rangeType = "bounced";
console.log("Timeline range type set to 'bounced'.");
