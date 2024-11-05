// @ts-nocheck

//1. Check if there is a selected layer and log its details
if (reearth.layers.selected) {
  console.log("Selected Layer ID:", reearth.layers.selected.id);
  console.log("Selected Layer Title:", reearth.layers.selected.layer.title);
} else {
  console.log("No layer is currently selected.");
}

//2. Example function to update the visibility of the selected layer
function toggleVisibilityOfSelectedLayer() {
  if (reearth.layers.selected && reearth.layers.selected.layer.visible) {
    reearth.layers.override(reearth.layers.selected.id, { visible: false });
    console.log("Layer visibility turned off:", reearth.layers.selected.id);
  } else if (reearth.layers.selected) {
    reearth.layers.override(reearth.layers.selected.id, { visible: true });
    console.log("Layer visibility turned on:", reearth.layers.selected.id);
  }
}
