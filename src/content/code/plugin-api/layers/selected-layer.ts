// @ts-nocheck

// Check if there is a selected layer and log its details
if (reearth.layers.selected) {
  console.log("Selected Layer ID:", reearth.layers.selected.id);
  console.log("Selected Layer Title:", reearth.layers.selected.layer?.title);
} else {
  console.log("No layer is currently selected.");
}
