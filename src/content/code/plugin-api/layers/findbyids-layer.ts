// @ts-nocheck

//1. Function to retrieve and log details of multiple layers by their IDs
function logMultipleLayerDetails(...layerIds) {
  const layers = reearth.layers.findByIds(...layerIds);
  layers.forEach((layer, index) => {
    if (layer) {
      console.log(`Layer ${index + 1} found:`, layer);
    } else {
      console.log(`Layer ${index + 1} not found for ID: ${layerIds[index]}`);
    }
  });
}

// Example call to function with multiple layer IDs
logMultipleLayerDetails("01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q");

//2. Define an array of layer IDs to be searched
const layerIds = ["01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q"];

// Retrieve the layers by their IDs
const layers = reearth.layers.findByIds(...layerIds);

// Process the results, handling both found and not found cases
layers.forEach((layer, index) => {
  if (layer) {
    console.log(`Layer found: ID = ${layer.id}, Title = ${layer.title}`);
  } else {
    console.log(`No layer found for ID: ${layerIds[index]}`);
  }
});
