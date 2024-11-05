// @ts-nocheck

//1. Check if there is a selected layer and log its details
if (reearth.layers.selectedFeature) {
  console.log("Selected Feature ID:", reearth.layers.selectedFeature.id);
} else {
  console.log("No Feature is currently selected.");
}

//2. Example function to check a property of the selected layer
function toggleVisibilityOfSelectedLayer() {
  if (reearth.layers.selectedFeature) {
    console.log("gml_id:", reearth.layers.selectedFeature.properties.gml_id);
  } else if (reearth.layers.selectedFeature) {
    console.log("No Feature is currently selected.");
  }
}
