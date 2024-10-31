// @ts-nocheck

//Example 1: Send a message to UI iframe
reearth.ui.postMessage("Hello, Re:Earth!");

//Example 2: Send an object message
reearth.ui.postMessage({ type: "greeting", text: "Hello, World!" });
