// @ts-nocheck

const newLayerId = reearth.layers.add({
  type: "simple",
  data: {
    type: "geojson",
    value: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [139.97422779688281, 35.74642872517698],
            type: "Point",
          },
        },
      ],
    },
  },
  // marker property is required to indicate that the layer needs a marker appearance
  marker: {},
});

if (newLayerId) {
  console.log("Layer added successfully with ID:", newLayerId);
} else {
  console.log("Failed to add layer.");
}
