// @ts-nocheck

// Check if there is a selected feature and log its details
if (reearth.layers.selectedFeature) {
  console.log("Selected Feature ID:", reearth.layers.selectedFeature.id);
} else {
  console.log("No Feature is currently selected.");
}
