export default `
//1. Define a new layer
const newLayer = {
  // always same
  type: "simple",
  // 1. how to load data
  data: {
    type: "geojson",
    value: {
      // GeoJSON
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
            type: "Polygon", // sample polygon
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [139.93007825346956, 35.81332779614391],
              [139.8105822019014, 35.730789521095986],
            ],
            type: "LineString", // sample polyline
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [139.97422779688281, 35.74642872517698],
            type: "Point", // sample marker
          },
        },
      ],
    },
  },
  // 2. how to style
  // if there are no styles, default style is used
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
  polyline: {
    shadows: "enabled",
    strokeColor: "red",
    strokeWidth: 5,
  },
  polygon: {
    extrudedHeight: 10000,
    fillColor: "red",
    shadow: "enabled",
    stroke: true,
    strokeColor: "#ffffff",
    strokeWidth: 1,
  },
};

// Adds the new layer to the project
const newLayerId = reearth.layers.add(newLayer);

if (newLayerId) {
  console.log("Layer added successfully with ID:", newLayerId);
} else {
  console.log("Failed to add layer.");
}
`;
