// @ts-nocheck

// Define the layer ID and feature ID you are searching for
const targetLayerId = "01j90ed9m6bxagb6bvfg4sk49q";
const targetFeatureId = "6167fcb5-9564-4c8e-a4d3-d0b419f54ec6";

// Attempt to find the layer by its ID
const feature = reearth.layers.findFeatureById(targetLayerId, targetFeatureId);

// Check if the feature was found and log the result or handle it accordingly
if (feature) {
  console.log(`feature found: ${feature.type}`);
} else {
  console.log("No feature found with the specified ID:", targetFeatureId);
}
