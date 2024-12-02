// @ts-nocheck

// Example 1: Log the current playback speed of the timeline
if (reearth.timeline.speed !== undefined) {
  console.log("Timeline Playback Speed:", reearth.timeline.speed);
} else {
  console.log("Timeline speed is not set.");
}

// Example 2: Increase the timeline playback speed to double-time (2x)
reearth.timeline.speed = 2.0;
console.log("Playback speed set to:", reearth.timeline.speed);
