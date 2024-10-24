// @ts-nocheck

// Register a listener for the 'update' event
reearth.camera.on("update", () => {
  console.log("UI was updated.");
});

// Register a one-time listener for the 'close' event
reearth.camera.on(
  "close",
  () => {
    console.log("UI was closed.");
  },
  { once: true }
);
