// @ts-nocheck

// Example 1: Send a simple text message
reearth.modal.postMessage("Hello, Re:Earth!");

// Example 2: Send a simple string message to the Reearth application
reearth.modal.postMessage("User clicked the button!");

// Example 3: Send an object message
reearth.modal.postMessage({ message: "greeting" });

// Example 4: Sending an object containing user data
reearth.modal.postMessage({
  eventType: "userAction",
  details: {
    action: "submit",
    userId: 12345,
  },
});
