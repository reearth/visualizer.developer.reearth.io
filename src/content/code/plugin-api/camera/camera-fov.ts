// @ts-nocheck

// Example 1: Access and log the camera's current field of view
const cameraFov = reearth.camera.fov;

if (cameraFov !== undefined) {
  console.log("Current Camera FOV (radians):", cameraFov);
} else {
  console.log("Camera FOV is undefined.");
}

// Example 2: Adjust based on FOV
// Check and adjust the camera's field of view if too wide
const cameraFov = reearth.camera.fov;

if (cameraFov !== undefined && cameraFov > 1) {
  console.log("Camera FOV is wide. Consider reducing for a more focused view.");
} else if (cameraFov !== undefined) {
  console.log("Camera FOV is optimal for current view.");
}
