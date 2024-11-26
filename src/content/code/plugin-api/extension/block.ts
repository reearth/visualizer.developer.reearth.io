// @ts-nocheck

// Example 1: Get the details of a story block
const block = reearth.extension.block;

if (block && block.extensionType === "storyBlock") {
  console.log("Story Block ID:", block.id);
  console.log("Plugin ID:", block.pluginId);
  console.log("Block Name:", block.name);
}

// Example 2: Modify a property of a story block
const block = reearth.extension.block;

if (block && block.extensionType === "storyBlock") {
  block.property = { title: "Updated Story Title" }; // Modify the property dynamically
  console.log(`Story Block Property Updated: ${block.property.title}`);
}

// Example 3: Access a layer associated with an infobox block
const block = reearth.extension.block;

if (block && block.extensionType === "infoboxBlock" && block.layer) {
  const layer = block.layer;
  console.log(`Layer ID: ${layer.id}`);
  console.log(`Layer Title: ${layer.title}`);
  console.log(`Layer Type: ${layer.type}`);
  // Toggle visibility
  layer.visible = !layer.visible;
  console.log(`Layer visibility toggled to: ${layer.visible}`);
}
