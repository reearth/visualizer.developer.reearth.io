// @ts-nocheck

// Example of sending a simple text message
reearth.modal.postMessage("Hello, Re:Earth!");

// Example: Sending a simple string message to the Reearth application
reearth.modal.postMessage("User clicked the button!");

// Send an object message
reearth.modal.postMessage({ message: "greeting" });

// Example: Sending an object containing user data
reearth.modal.postMessage({
  eventType: "userAction",
  details: {
    action: "submit",
    userId: 12345,
  },
});
