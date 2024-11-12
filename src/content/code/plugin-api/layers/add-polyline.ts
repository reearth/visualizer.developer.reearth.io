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
            coordinates: [
              [139.93007825346956, 35.81332779614391],
              [139.8105822019014, 35.730789521095986],
            ],
            type: "LineString",
          },
        },
      ],
    },
  },
  // polyline property is required to indicate that the layer needs a polyline appearance
  polyline: {},
});

if (newLayerId) {
  console.log("Layer added successfully with ID:", newLayerId);
} else {
  console.log("Failed to add layer.");
}
