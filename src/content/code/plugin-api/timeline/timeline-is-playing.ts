// @ts-nocheck

// Example 1: Log whether the timeline is playing or paused
if (reearth.timeline.isPlaying === true) {
  console.log("The timeline is currently playing.");
} else if (reearth.timeline.isPlaying === false) {
  console.log("The timeline is paused.");
} else {
  console.log("The timeline state is not set or unavailable.");
}

// Example 2: Trigger an animation when the timeline is playing
if (reearth.timeline.isPlaying) {
  console.log("Playing animation linked to the timeline...");
}

// Example 3: Toggle the playback state of the timeline
if (reearth.timeline.isPlaying !== undefined) {
  reearth.timeline.isPlaying = !reearth.timeline.isPlaying; // Toggle the state
  console.log(
    `Timeline is now ${reearth.timeline.isPlaying ? "playing" : "paused"}.`
  );
} else {
  console.log("Timeline state is not set or unavailable.");
}
