// @ts-nocheck

// Example 1: Calculate intersection with terrain and view size
const intersection = reearth.camera.getGlobeIntersection({
  withTerrain: true, // Enable terrain intersection
  calcViewSize: true, // Calculate visible area size
});

if (intersection) {
  console.log("Intersection Point:", intersection.center);
  console.log("View Size (meters):", intersection.viewSize);
} else {
  console.log("No intersection found.");
}

// Example 2: Calculate intersection with a flat globe surface and no view size calculation
const intersection = reearth.camera.getGlobeIntersection({
  withTerrain: false, // Assume a flat globe surface
  calcViewSize: false, // Do not calculate the visible area size
});

if (intersection && intersection.center) {
  console.log("Intersection Point:", intersection.center);
  console.log("Latitude:", intersection.center.lat);
  console.log("Longitude:", intersection.center.lng);
  console.log("Height:", intersection.center.height);
} else {
  console.log("No intersection found.");
}

// Example 3: Safely handle undefined intersection
const intersection = reearth.camera.getGlobeIntersection({
  withTerrain: true,
});

if (!intersection) {
  console.log("No intersection found. The camera may be above the globe.");
} else if (intersection.center) {
  console.log("Latitude:", intersection.center.lat);
  console.log("Longitude:", intersection.center.lng);
  console.log("Height:", intersection.center.height);
}
