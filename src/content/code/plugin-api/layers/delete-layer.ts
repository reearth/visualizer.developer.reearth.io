// @ts-nocheck

//1. Define the IDs of layers to be deleted
const layerIdsToDelete = ["ed5cade3-4049-4626-a4c6-4e84baaef987", "0cdc12f8-4096-4a3c-84fa-0cc984130559"];

// Show the specified layers in the Reearth scene
reearth.layers.delete(...layerIdsToDelete);

// Log the action for confirmation
console.log("Specified layers have been deleted.");

//2. Function to delete multiple layers by their IDs
function deleteSpecificLayers(...layerIds) {
  reearth.layers.delete(...layerIds);
  console.log(`Layers with IDs ${layerIds.join(", ")} are deleted.`);
}

// Example call to the function to show layers
deleteSpecificLayers("ed5cade3-4049-4626-a4c6-4e84baaef987", "0cdc12f8-4096-4a3c-84fa-0cc984130559");
