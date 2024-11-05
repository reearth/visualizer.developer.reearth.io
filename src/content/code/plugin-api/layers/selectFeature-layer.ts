// @ts-nocheck

//1. Select a feature by layer ID and feature ID
reearth.layers.selectFeature("01j90ed9m6bxagb6bvfg4sk49q", "6167fcb5-9564-4c8e-a4d3-d0b419f54ec6");

//2. Layer ID and feature ID to be selected
const layerId = "01j90ed9m6bxagb6bvfg4sk49q";
const featureId = "6167fcb5-9564-4c8e-a4d3-d0b419f54ec6";

// Select the layer
reearth.layers.selectFeature(layerId, featureId);

// Log the selection action
console.log(`Feature ${featureId} has been selected for user interaction.`);
