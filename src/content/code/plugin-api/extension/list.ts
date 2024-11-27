// @ts-nocheck

// Example 1: Log all extension instances and their metadata
const extensionInstances = reearth.extension.list;

extensionInstances.forEach((instance) => {
  console.log("Extension Instance ID:", instance.id);
  console.log("Plugin ID:", instance.pluginId);
  console.log("Name:", instance.name);
  console.log("Extension ID:", instance.extensionId);
  console.log("Type:", instance.extensionType);
  console.log("Run Times:", instance.runTimes ?? "Not Available");
});

// Example 2: Filter and log only widget extensions
const widgets = reearth.extension.list.filter(
  (instance) => instance.extensionType === "widget"
);

console.log("Widget Extensions:");
widgets.forEach((widget) => {
  console.log(`- ${widget.name} (ID: ${widget.id})`);
});
