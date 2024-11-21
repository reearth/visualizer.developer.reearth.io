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
              [
                [139.56560369329821, 35.859787461762906],
                [139.56560369329821, 35.586320662892106],
                [139.73648312259508, 35.586320662892106],
                [139.73648312259508, 35.859787461762906],
                [139.56560369329821, 35.859787461762906],
              ],
            ],
            type: "Polygon",
          },
        },
      ],
    },
  },
  // polygon property is required to indicate that the layer needs a polygon appearance
  polygon: {},
});

if (newLayerId) {
  console.log("Layer added successfully with ID:", newLayerId);
} else {
  console.log("Failed to add layer.");
}
