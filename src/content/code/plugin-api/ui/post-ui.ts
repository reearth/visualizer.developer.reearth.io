// @ts-nocheck

//Example 1: Send a message to Re:Earth
reearth.ui.postMessage("Hello, Re:Earth!");

//Example 2: Send an object message
reearth.ui.postMessage({ type: "greeting", text: "Hello, World!" });

//Example 3: Send the first layer's information to the embedded UI
// reearth.ui.postMessage(reearth.layers.layers?.[0]);

//Example 3: Send a layer's information to the embedded UI
const layers = reearth.layers.layers; // Fetch the first layer's information
if (layers && layers.length > 0) {
  const firstLayer = layers[0]; // Get the first layer

  // Send the first layer's information to the embedded UI
  reearth.ui.postMessage({
    type: "LayerInfo",
    payload: {
      id: firstLayer.id,
      title: firstLayer.title,
    },
  });
} else {
  console.log("No layers available to send.");
}
