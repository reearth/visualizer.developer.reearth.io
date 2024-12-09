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
