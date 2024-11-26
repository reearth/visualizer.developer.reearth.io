// @ts-nocheck

// Example 1: Check and log widget details
const widget = reearth.extension.widget;

if (widget) {
  console.log("Widget ID:", widget.id);
  console.log("Plugin ID:", widget.pluginId);
  console.log("Extension ID:", widget.extensionId);
  console.log("Property ID:", widget.propertyId);
  console.log("Extended Horizontally:", widget.extended?.horizontally);
  console.log("Extended Vertically:", widget.extended?.vertically);
}

// Example 2: Log widget layout and positioning details
const widget = reearth.extension.widget;

if (widget?.layout) {
  const { location, align } = widget.layout;
  console.log("Widget Zone:", location.zone);
  console.log("Widget Section:", location.section);
  console.log("Widget Area:", location.area);
  console.log("Widget Alignment:", align || "No alignment specified");
}

// Example 3: Modify widget properties
const widget: Widget = {
  id: "widget1", // Unique identifier for the widget
  pluginId: "plugin123", // Plugin ID that owns this widget
  extensionId: "ext456", // Extension ID that created the widget
  propertyId: "prop789", // ID linking to widget properties
  property: {
    // Custom properties defined by the plugin
    theme: "dark",
    size: "large",
  },
  extended: {
    // Extended state of the widget
    horizontally: true, // Widget is extended horizontally
    vertically: false, // Widget is not extended vertically
  },
  layout: {
    // Layout details for the widget
    location: {
      zone: "inner", // Widget is in the inner UI zone
      section: "center", // Widget is in the center section
      area: "top", // Widget is in the top area of the section
    },
    align: "centered", // Widget is centered within the area
  },
};
