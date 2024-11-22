// @ts-nocheck

// Example 1: Retrieve the current camera position
const currentPosition = reearth.camera.position;

// Check if the position is available
if (currentPosition) {
  console.log("Latitude:", currentPosition.lat);
  console.log("Longitude:", currentPosition.lng);
  console.log("Height:", currentPosition.height);
  console.log("Heading:", currentPosition.heading);
  console.log("Pitch:", currentPosition.pitch);
  console.log("Roll:", currentPosition.roll);
} else {
  console.log("Camera position is undefined.");
}

// Example 2: Set the camera to a new position and orientation
reearth.camera.position = {
  lat: 35.681236, // Latitude in degrees
  lng: 139.767125, // Longitude in degrees
  height: 1000, // Height in meters
  heading: 0.785398163, // Heading in radians (equivalent to 45 degrees)
  pitch: -0.523598776, // Pitch in radians (equivalent to -30 degrees)
  roll: 0, // Roll in radians
};
