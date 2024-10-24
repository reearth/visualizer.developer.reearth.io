// @ts-nocheck

// Send a message to Re:Earth
reearth.ui.postMessage("Hello, Re:Earth!");

// Send an object message
reearth.ui.postMessage({ type: "greeting", text: "Hello, World!" });

// Send the first layer's information to the embedded UI
reearth.ui.postMessage(reearth.layers.layers?.[0]);
