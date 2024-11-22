// @ts-nocheck

// Example 1: Listen for camera movement and log the updated position
reearth.camera.on("move", (camera) => {
  console.log("Camera moved:");
  console.log("Latitude:", camera.lat);
  console.log("Longitude:", camera.lng);
  console.log("Height:", camera.height);
  console.log("Heading:", camera.heading);
  console.log("Pitch:", camera.pitch);
  console.log("Roll:", camera.roll);
});

// Example 2: Trigger a custom action whenever the camera moves
reearth.camera.on("move", (camera) => {
  if (camera.lat && camera.lng) {
    console.log(`Camera moved to ${camera.lat}, ${camera.lng}`);
  }
});
