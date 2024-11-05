// @ts-nocheck

//1. Directly search with a specific ID
reearth.layers.findById("01j1rx8xhxsk2wdydew3m8hr6q");

//2. Define the layer ID you are searching for
const targetLayerId = "01j1rx8xhxsk2wdydew3m8hr6q";

// Attempt to find the layer by its ID
const layer = reearth.layers.findById(targetLayerId);

// Check if the layer was found and log the result or handle it accordingly
if (layer) {
  console.log(`Layer found: ${layer.title}`);
} else {
  console.log("No layer found with the specified ID:", targetLayerId);
}

//3. Function to retrieve a layer by its ID and log its details
function logLayerDetails(layerId) {
  const layer = reearth.layers.findById(layerId);
  if (layer) {
    console.log("Found layer:", layer);
  } else {
    console.log("No layer found with ID:", layerId);
  }
}

// Example of using the function with a specific layer ID
logLayerDetails("01j1rx8xhxsk2wdydew3m8hr6q");
