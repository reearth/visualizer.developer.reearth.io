// @ts-nocheck

// Example 1: Register a listener for a custom UI event called 'update'
reearth.ui.on("update", () => {
  console.log("UI was updated.");
});

// Example 2: Register a one-time listener for the 'close' event
reearth.ui.on(
  "close",
  () => {
    console.log("UI was closed."); // This logs once when the UI closes
  },
  { once: true } // The listener is removed after the first execution
);

// Example 3: Register a listener that increments the counter each time the UI updates
let updateCount = 0; // Initialize a counter for UI updates

// Register a listener that increments the counter each time the UI updates
reearth.ui.on("update", () => {
  updateCount++; // Increment the counter on each update
  console.log(`UI updated ${updateCount} times`); // Log the current count
});
