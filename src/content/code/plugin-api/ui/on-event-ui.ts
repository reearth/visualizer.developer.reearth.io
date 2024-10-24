// @ts-nocheck

// Example 1: Register a listener for a custom UI event called 'update'
reearth.ui.on("update", () => {
  console.log("UI was updated.");
});

// Example 2: Register a one-time listener for the 'close' event
reearth.ui.on(
  "close",
  () => {
    console.log("UI was closed.");
  },
  { once: true }
);
