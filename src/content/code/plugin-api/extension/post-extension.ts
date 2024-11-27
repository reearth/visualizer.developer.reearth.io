// @ts-nocheck

// Send a message to a widget with name "my-widget-name"
const extensionInstances = reearth.extension.list;

const targetWidgetId = extensionInstances.find(
  (extension) => extension.name === "my-widget-name"
)?.id;

if (targetWidgetId) {
  reearth.extension.postMessage(targetWidgetId, {
    action: "update",
    data: { key: "value" },
  });
}
