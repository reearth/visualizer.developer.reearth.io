// @ts-nocheck

// Example 1: Set the camera to a specific position with heading, pitch, and roll
reearth.camera.setView({
  lat: 35.6895, // Latitude for Tokyo
  lng: 139.6917, // Longitude for Tokyo
  height: 1000, // Altitude in meters
  heading: 1.57, // Heading in radians (90 degrees clockwise)
  pitch: -0.785, // Pitch in radians (45 degrees downward)
  roll: 0, // No roll
});

// Example 2: Set the camera with a custom field of view
reearth.camera.setView({
  lat: 48.8566, // Latitude for Paris
  lng: 2.3522, // Longitude for Paris
  height: 1500, // Altitude in meters
  heading: 0.785, // Heading in radians (45 degrees clockwise)
  pitch: -0.523, // Pitch in radians (30 degrees downward)
  roll: 0, // No roll
  fov: 1.2, // Field of view in radians
});

// Example 3: Set the camera without heading, pitch, or roll
reearth.camera.setView({
  lat: 40.7128, // Latitude for New York City
  lng: -74.006, // Longitude for New York City
  height: 2000, // Altitude in meters
});
