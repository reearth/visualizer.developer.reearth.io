// @ts-nocheck

// Example 1: Fly to specified coordinates with a 3-second animation
reearth.camera.flyTo(
  { lat: 35.6895, lng: 139.6917, height: 500 }, // Tokyo coordinates
  { duration: 3 } // 3-second animation duration
);

// Example 2: Fly to a layer instantly without animation
const layerId = "layer123";
reearth.camera.flyTo(layerId, { withoutAnimation: true });

// Example 3: Fly to coordinates with a 4-second animation, custom FOV, and easing function
reearth.camera.flyTo(
  {
    lat: 48.8566, // Latitude for Paris
    lng: 2.3522, // Longitude for Paris
    height: 1500, // Altitude in meters
    heading: 0.785, // Heading in radians (45 degrees clockwise)
    pitch: -0.523, // Pitch in radians (30 degrees downward)
    roll: 0, // No roll
  },
  {
    duration: 4, // Set animation duration to 4 seconds
    withoutAnimation: false, // Ensure animation is enabled
    fov: 0.8, // Set field of view to 0.8 radians
    easing: (t) => t * t, // Custom easing for a slower start
  }
);
