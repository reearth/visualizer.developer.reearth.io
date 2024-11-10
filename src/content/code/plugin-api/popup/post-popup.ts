// @ts-nocheck

// Example 1. Sending a simple string message from the popup
reearth.popup.postMessage("Popup completed its task");

// Example 2. Send an object with user interaction details
const userData = {
  action: "submit",
  details: { name: "John Doe", email: "john@example.com" },
};

reearth.popup.postMessage(userData);
