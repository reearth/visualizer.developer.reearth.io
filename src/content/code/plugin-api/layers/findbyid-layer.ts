// @ts-nocheck

// Define the layer ID you are searching for
const targetLayerId = "01j1rx8xhxsk2wdydew3m8hr6q";

// Attempt to find the layer by its ID
const layer = reearth.layers.findById(targetLayerId);

// Check if the layer was found and log the result or handle it accordingly
if (layer) {
  console.log(`Layer found: ${layer.title}`);
} else {
  console.log("No layer found with the specified ID:", targetLayerId);
}
