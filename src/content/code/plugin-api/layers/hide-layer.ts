// @ts-nocheck

//1. Define the IDs of layers to be hidden
const layerIdsToHide = ["01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q"];

// Hide the specified layers in the Reearth scene
reearth.layers.hide(...layerIdsToHide);

// Log the action for confirmation
console.log("Specified layers have been hidden.");

//2. Function to hide multiple layers by their IDs
function hideSpecificLayers(...layerIds) {
  reearth.layers.hide(...layerIds);
  console.log(`Layers with IDs ${layerIds.join(", ")} have been hidden.`);
}

// Example call to the function to hide layers
hideSpecificLayers("01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q");
