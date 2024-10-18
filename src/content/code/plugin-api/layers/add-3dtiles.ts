// @ts-nocheck

// Define a 3D tile. This is a 3D tile of Chiyoda yard building in Tokyo. The co-ordinates are Latitude: 35.69393005 Longitude: 139.75371138.
const tile3d = {
  type: "simple",
  data: {
    type: "3dtiles",
    url: "https://plateau.geospatial.jp/main/data/3d-tiles/bldg/13100_tokyo/13101_chiyoda-ku/notexture/tileset.json",
  },
  "3dtiles": {
    show: true,
    color: {
      expression: {
        conditions: [
          ["${_zmax} > 100", "color('red')"],
          ["true", "color('green')"],
        ],
      },
    },
    edgeWidth: 10,
    edgeColor: "#ffffff",
    selectedFeatureColor: "blue",
  },
};

reearth.layers.add(tile3d);
