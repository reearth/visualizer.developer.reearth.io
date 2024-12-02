// @ts-nocheck

// Example 1: Allow the timeline to progress indefinitely
if (reearth.timeline.setRangeType) {
  reearth.timeline.setRangeType("unbounded");
  console.log("Timeline range type set to 'unbounded'.");
} else {
  console.log("The setRangeType method is not available.");
}

// Example 2: Restrict the timeline within the defined range
reearth.timeline.setRangeType?.("clamped");
console.log("Timeline range type set to 'clamped'.");

// Example 3: Enable bouncing behavior for the timeline
if (reearth.timeline.setRangeType) {
  reearth.timeline.setRangeType("bounced");
  console.log("Timeline range type set to 'bounced'.");
}

// Example 4: Dynamically set range type based on application needs
const useInfiniteTimeline = true;

if (reearth.timeline.setRangeType) {
  if (useInfiniteTimeline) {
    reearth.timeline.setRangeType("unbounded");
    console.log("Timeline range type dynamically set to 'unbounded'.");
  } else {
    reearth.timeline.setRangeType("clamped");
    console.log("Timeline range type dynamically set to 'clamped'.");
  }
}
