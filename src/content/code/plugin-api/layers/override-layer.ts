// @ts-nocheck

// add a sample layer
const sampleLayer = {
  type: "simple",
  data: {
    type: "geojson",
    value: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [139.6917, 35.6895],
      },
    },
  },
  marker: {
    height: 100,
    style: "image",
    imageSize: 3,
    imageColor: "blue",
    label: true,
    labelText: "sample",
    labelPosition: "top",
    labelTypography: {
      italic: true,
    },
  },
};
const layerId = reearth.layers.add(sampleLayer);

//1. Example to set the visible of a layer to hidden
reearth.layers.override(layerId, { visible: false });

// Example to update the default location property of a layer
reearth.layers.override(layerId, {
  data: {
    type: "geojson",
    value: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [139.7917, 35.6895],
      },
    },
  },
});

// Example to modify the style
reearth.layers.override(layerId, {
  marker: {
    imageSize: 2,
    imageColor: "red",
    labelText: "update",
  },
});

// Logging a message to confirm the operation
console.log("Property override applied to specified layers.");

//2. Define the layer ID and new property value
const layerId = "01hrv2ddxmg7a64xw9mdq81f6k";
const newProperty = { visible: false, marker: { imageColor: "red" } };

// Override the property of the layer
reearth.layers.override(layerId, newProperty);

// Log the action to confirm the property override
console.log(`Property overridden for layer ${layerId}`);
