// @ts-nocheck

const layerId = reearth.layers.add({
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
  marker: {},
});

reearth.camera.lookAt({
  lat: 35.74642872517698,
  lng: 139.97422779688281,
  height: 1000,
});

reearth.layers.on("select", (layerId, featureId) => {
  console.log(
    `Layer selection: Layer ID: ${layerId}, Feature ID: ${featureId}`
  );
});
