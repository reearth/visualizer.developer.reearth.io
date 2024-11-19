// @ts-nocheck

// Example 1: Zoom out instantly
reearth.camera.zoomOut(10, { withoutAnimation: true });

// Example 2: Zoom out with a custom easing function
reearth.camera.zoomOut(5, {
  duration: 2, // Set animation duration to 2 seconds
  easing: (t) => t * t, // Custom easing for a slower start
});

// Example 3: Zoom out with a custom easing function and animation
reearth.camera.zoomOut(15, {
  duration: 4, // Animation lasts 4 seconds
  withoutAnimation: false, // Enable animation
  easing: (t) => t * (2 - t), // Custom easing for smooth acceleration and deceleration
});
