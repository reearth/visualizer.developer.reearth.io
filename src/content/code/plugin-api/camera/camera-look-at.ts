// @ts-nocheck

// Example 1: Focus on specific coordinates with a default animation
reearth.camera.lookAt({
  lat: 34.0522, // Latitude for Los Angeles
  lng: -118.2437, // Longitude for Los Angeles
  height: 1000, // Altitude in meters
});

// Example 2: Focus on coordinates with custom heading, pitch, and range
reearth.camera.lookAt(
  {
    lat: 51.5074, // Latitude for London
    lng: -0.1278, // Longitude for London
    height: 1000, // Altitude in meters
    heading: 1.57, // Heading in radians (90 degrees clockwise)
    pitch: -0.785, // Pitch in radians (45 degrees downward)
    range: 2000, // 2 kilometers from the focus point
  },
  {
    duration: 3, // Set animation duration to 3 seconds
  }
);

// Example 3: Use all destination and options parameters
reearth.camera.lookAt(
  {
    lat: 35.6895, // Latitude for Tokyo
    lng: 139.6917, // Longitude for Tokyo
    height: 500, // Altitude in meters
    heading: 0.785, // Heading in radians
    pitch: -0.523, // Pitch in radians
    range: 1500, // 1.5 kilometers from the focus point
    radius: 100, // Focus area radius in meters
  },
  {
    duration: 5, // Animation lasts 5 seconds
    withoutAnimation: false, // Enable animation
    easing: (t) => t * t, // Custom easing for a slower start
    fov: 1.2, // Set field of view to 1.2 radians
  }
);
