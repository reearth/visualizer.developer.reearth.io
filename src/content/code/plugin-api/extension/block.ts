// @ts-nocheck

// Example 1: Get the details of a story block
const block = reearth.extension.block;

if (block && block.extensionType === "storyBlock") {
  console.log("Story Block ID:", block.id);
  console.log("Plugin ID:", block.pluginId);
  console.log("Block Name:", block.name);
}

// Example 2: Access a layer associated with an infobox block
const block = reearth.extension.block;

if (block && block.extensionType === "infoboxBlock" && block.layer) {
  const layer = block.layer;
  console.log(`Layer ID: ${layer.id}`);
  console.log(`Layer Title: ${layer.title}`);
  console.log(`Layer Type: ${layer.type}`);
}
