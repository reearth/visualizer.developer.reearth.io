// @ts-nocheck

// Example 1: Send a message to a widget with ID "widget123"
reearth.extension.postMessage("widget123", {
  action: "update",
  data: { key: "value" },
});

// Example 2: Send a message to a block with ID "block456"
reearth.extension.postMessage("block456", { message: "greeting" });

// Example 3: Pass data to another extension with ID "extension789"
reearth.extension.postMessage("extension789", {
  type: "command",
  payload: { zoomLevel: 5 },
});
