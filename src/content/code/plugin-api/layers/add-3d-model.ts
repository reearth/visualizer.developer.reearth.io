// @ts-nocheck

const model3D = {
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
  model: {
    url: "https://api.visualizer.test.reearth.dev/assets/01j90myth0wy2kq5agry8rh4fd.gltf", // 'Re:Earth' logo from asset
    heightReference: "relative",
    heading: 270,
    pitch: 0,
    roll: 0,
    scale: 100,
    silhouette: true,
    silhouetteColor: "red",
  },
};

reearth.layers.add(model3D);
