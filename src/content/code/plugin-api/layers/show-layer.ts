// @ts-nocheck

//1. Define the IDs of layers to be shown
const layerIdsToShow = ["01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q"];

// Show the specified layers in the Reearth scene
reearth.layers.show(...layerIdsToShow);

// Log the action for confirmation
console.log("Specified layers have been made visible.");

//2. Function to show multiple layers by their IDs
function showSpecificLayers(...layerIds) {
  reearth.layers.show(...layerIds);
  console.log(`Layers with IDs ${layerIds.join(", ")} are now visible.`);
}

// Example call to the function to show layers
showSpecificLayers("01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q");
