// @ts-nocheck

//1. Define a search function to find all layers with a specific visibility setting
const searchVisibleLayers = (layer) => layer.isVisible;

// Use the findAll method to get all visible layers
const visibleLayers = reearth.layers.findAll(searchVisibleLayers);

// Output the IDs of the found layers
console.log(
  "Visible layers found:",
  visibleLayers.map((layer) => layer.id)
);

//2. Function to find all visible layers
const visibleLayers = reearth.layers.findAll((layer) => layer.isVisible);

// Logging the titles of all found layers
visibleLayers.forEach((layer) => {
  console.log("Visible layer:", layer.title);
});

//3. Filter out layers where the type is "GeoJSON" and the title is exactly "sample".
let filteredLayers = reearth.layers.findAll((layer) => layer.data.type === "geojson" && layer.title === "sample");

// Log the array of filtered layers to the console. This array contains all layers that meet the specified conditions.
console.log("filteredLayers: ", filteredLayers);
