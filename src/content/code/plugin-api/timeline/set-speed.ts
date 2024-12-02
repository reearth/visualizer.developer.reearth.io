// @ts-nocheck

// Example 1: Set playback speed to real-time (1.0)
if (reearth.timeline.setSpeed) {
  reearth.timeline.setSpeed(1.0);
  console.log("Timeline speed set to real-time (1.0).");
} else {
  console.log("The setSpeed method is not available.");
}

// Example 2: Adjust timeline speed dynamically from user input
const userSelectedSpeed = 3.0; // Example user input

if (reearth.timeline.setSpeed) {
  reearth.timeline.setSpeed(userSelectedSpeed);
  console.log(`Timeline speed dynamically set to ${userSelectedSpeed}.`);
} else {
  console.log("The setSpeed method is unavailable.");
}
