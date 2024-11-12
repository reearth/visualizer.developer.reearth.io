// @ts-nocheck

// Define an array of layer IDs to be searched
const layerIds = ["01j1rx8xhxsk2wdydew3m8hr6q", "01j90ed9m6bxagb6bvfg4sk49q"];

// Retrieve the layers by their IDs
const layers = reearth.layers.findByIds(...layerIds);

// Process the results, handling both found and not found cases
layers?.forEach((layer, index) => {
  if (layer) {
    console.log(`Layer found: ID = ${layer.id}, Title = ${layer.title}`);
  } else {
    console.log(`No layer found for ID: ${layerIds[index]}`);
  }
});
