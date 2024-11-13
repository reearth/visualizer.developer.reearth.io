// @ts-nocheck

// Example 1: Access and log the camera's current aspect ratio
const cameraAspectRatio = reearth.camera.aspectRatio;

if (cameraAspectRatio !== undefined) {
  console.log("Current Camera Aspect Ratio:", cameraAspectRatio);
} else {
  console.log("Camera aspect ratio is undefined.");
}

// Example 2: Adjust camera view based on aspect ratio
const cameraAspectRatio = reearth.camera.aspectRatio;

if (cameraAspectRatio !== undefined && cameraAspectRatio > 1.8) {
  console.log(
    "Camera aspect ratio is very wide. Consider adjusting the view for better composition."
  );
} else if (cameraAspectRatio !== undefined) {
  console.log("Camera aspect ratio is within a normal range.");
}
