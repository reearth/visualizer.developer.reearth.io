// @ts-nocheck

// Check if there are any overridden properties defined
if (reearth.layers.overridden) {
  console.log("Overridden properties are defined.");

  // Iterate through the overridden properties and log each one
  Object.entries(reearth.layers.overridden).forEach(([layerId, props]) => {
    console.log(`Layer ID: ${layerId}, Overridden Properties:`, props);
  });
} else {
  console.log("No overridden properties are defined.");
}
