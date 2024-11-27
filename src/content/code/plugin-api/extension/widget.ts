// @ts-nocheck

// Check and log widget details
const widget = reearth.extension.widget;

if (widget) {
  console.log("Widget ID:", widget.id);
  console.log("Plugin ID:", widget.pluginId);
  console.log("Extension ID:", widget.extensionId);
  console.log("Property ID:", widget.propertyId);
  console.log("Extended Horizontally:", widget.extended?.horizontally);
  console.log("Extended Vertically:", widget.extended?.vertically);
}
