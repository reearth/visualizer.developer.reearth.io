// @ts-nocheck

// Example 1: Fly to a bounding box with a 2-second animation
reearth.camera.flyToBoundingBox(
  { west: -74.1, south: 40.7, east: -73.9, north: 40.8 }, // New York City area
  { duration: 2 } // 2-second animation duration
);

// Example 2: Fly to a bounding box without animation
reearth.camera.flyToBoundingBox(
  { west: 139.6, south: 35.6, east: 139.8, north: 35.7 }, // Tokyo area
  { withoutAnimation: true }
);

// Example 3: Fly to a bounding box with full parameters in use
reearth.camera.flyToBoundingBox(
  {
    west: -122.55, // Western boundary of San Francisco area
    south: 37.7, // Southern boundary
    east: -122.35, // Eastern boundary
    north: 37.85, // Northern boundary
  },
  {
    duration: 5, // Set animation duration to 5 seconds
    withoutAnimation: false, // Enable animation
    easing: (t) => t * t, // Custom easing for a slower start
    heading: 0.785, // Set heading to 0.785 radians (45 degrees clockwise)
    pitch: -0.523, // Tilt downward to -0.523 radians (30 degrees)
    range: 4000, // Set camera distance to 4000 meters from the center
  }
);
