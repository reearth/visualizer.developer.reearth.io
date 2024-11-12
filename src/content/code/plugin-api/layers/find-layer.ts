// @ts-nocheck

//1. Define a search function to find the first visible layer
const searchFunction = (layer, index) => {
  return layer.isVisible === true;
};

// Use the find method to locate the first visible layer
const foundLayer = reearth.layers.find(searchFunction);

// Log the result or handle the case where no layer is found
if (foundLayer) {
  console.log(`Found visible layer with ID: ${foundLayer.id}`);
} else {
  console.log("No visible layer found.");
}

//2. Search for the first layer that is a 3D Tiles with the title "Re:Earth" and assign it to a variable.
reearth.layers.find(
  (layer) => layer.data.type === "3dtiles" && layer.title === "Re:Earth"
);
