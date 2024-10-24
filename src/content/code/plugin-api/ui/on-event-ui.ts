// @ts-nocheck

// Register a listener for the 'update' event
reearth.ui.on("update", () => {
  console.log("UI was updated.");
});

// Register a one-time listener for the 'close' event
reearth.ui.on(
  "close",
  () => {
    console.log("UI was closed.");
  },
  { once: true }
);
