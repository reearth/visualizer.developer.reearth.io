// @ts-nocheck

// Example 1: Zooming in on the current view by a factor with animation
reearth.camera.zoomIn(2, {
  duration: 3,
  easing: (t) => t * (2 - t), // Quadratic easing in-out
});

// Example 2: Instant zoom in without animation
reearth.camera.zoomIn(100, {
  withoutAnimation: true,
});

// Example 4: Zoom in with animation and custom easing function
reearth.camera.zoomIn(500, {
  duration: 3, // Set animation duration to 3 seconds
  withoutAnimation: false, // Enable animation
  easing: (t) => t * t, // Custom easing function for slower start
});
