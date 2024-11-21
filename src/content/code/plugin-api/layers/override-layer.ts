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
    style: "image",
    imageSize: 1,
    imageColor: "blue",
  },
};
const layerId = reearth.layers.add(sampleLayer);

// Example to modify the style
// We should hav a big red marker instead of a small blue one
reearth.layers.override(layerId, {
  marker: {
    imageSize: 5,
    imageColor: "red",
  },
});
