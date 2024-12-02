// @ts-nocheck

// Example: Set custom timeline times
if (reearth.timeline.setTime) {
  reearth.timeline.setTime({
    start: new Date("2023-01-01T00:00:00Z"),
    stop: new Date("2023-12-31T23:59:59Z"),
    current: new Date("2023-06-01T12:00:00Z"),
  });
  console.log("Timeline times set successfully.");
} else {
  console.log("The setTime method is not available.");
}
