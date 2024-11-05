// @ts-nocheck

//1. Function to retrieve and log details of multiple layers by their IDs
function logFeatures(layerId, featureIds) {
  const features = reearth.layers.findFeaturesByIds(layerId, featureIds);
  features.forEach((feature, index) => {
    if (feature) {
      console.log(`Feature found: ID = ${feature.id}, Type = ${feature.type}`);
    } else {
      console.log(`No Feature found for ID: ${feature[index]}`);
    }
  });
}

const layerId = "01j90ed9m6bxagb6bvfg4sk49q";
const featureIds = ["6167fcb5-9564-4c8e-a4d3-d0b419f54ec6", "abae3164-f8b3-42bb-b194-0379ecc4c653"];

// Example call to function with multiple layer IDs
logFeatures(layerId, featureIds);

//2. Define an array of layer IDs to be searched
const layerId = "01j90ed9m6bxagb6bvfg4sk49q";
const featureIds = ["6167fcb5-9564-4c8e-a4d3-d0b419f54ec6", "abae3164-f8b3-42bb-b194-0379ecc4c653"];

// Retrieve the layers by their IDs
const features = reearth.layers.findFeaturesByIds(layerId, featureIds);

// Process the results, handling both found and not found cases
features.forEach((feature, index) => {
  if (feature) {
    console.log(`Feature found: ID = ${feature.id}, Type = ${feature.type}`);
  } else {
    console.log(`No Feature found for ID: ${feature[index]}`);
  }
});
