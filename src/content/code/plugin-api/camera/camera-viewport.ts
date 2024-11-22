// @ts-nocheck

// Example 1: Access and log the current geographic boundaries of the viewport
const viewportBounds = reearth.camera.viewport;

if (viewportBounds) {
  console.log("Viewport bounds:");
  console.log("West:", viewportBounds.west);
  console.log("South:", viewportBounds.south);
  console.log("East:", viewportBounds.east);
  console.log("North:", viewportBounds.north);
} else {
  console.log("Viewport is undefined.");
}

// Example 2: Check viewport and suggest adjustments
const viewportBounds = reearth.camera.viewport;

if (viewportBounds) {
  console.log("Current Viewport:", viewportBounds);

  // Check if viewport extends too far west or east
  if (viewportBounds.west < -180 || viewportBounds.east > 180) {
    console.log(
      "Viewport extends beyond global bounds. Consider adjusting the camera."
    );
  } else {
    console.log("Viewport is within normal geographic bounds.");
  }
} else {
  console.log("Viewport is undefined.");
}
