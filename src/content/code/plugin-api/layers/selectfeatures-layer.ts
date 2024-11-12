// @ts-nocheck

// add a sample layer
const chiyodaLayerId = reearth.layers.add({
  type: "simple",
  data: {
    type: "3dtiles",
    url: "https://assets.cms.plateau.reearth.io/assets/ca/ee4cb0-9ce4-4f6c-bca1-9c7623e84cb1/13100_tokyo23-ku_2022_3dtiles_1_1_op_bldg_13101_chiyoda-ku_lod2_no_texture/tileset.json",
  },
  ["3dtiles"]: {
    selectedFeatureColor: "red",
  },
});

const chuoLayerId = reearth.layers.add({
  type: "simple",
  data: {
    type: "3dtiles",
    url: "https://assets.cms.plateau.reearth.io/assets/4a/30f295-cd07-46b0-b0ab-4a4b1b3af06b/13100_tokyo23-ku_2022_3dtiles_1_1_op_bldg_13102_chuo-ku_lod2_no_texture/tileset.json",
  },
  ["3dtiles"]: {
    selectedFeatureColor: "red",
  },
});

// NOTE: After 3dtiles been loaded, we can use this to select features
// Select features by layer IDs and feature IDs
reearth.layers.selectFeatures([
  {
    layerId: chiyodaLayerId,
    featureId: [
      "f9f2275bcf13a9674ba81473bc129ed6",
      "b9a4fd90ca6112eccd43bfffd4aeb2fe",
    ],
  },
  {
    layerId: chuoLayerId,
    featureId: [
      "acf77feceabce515700a47021bfe63dc",
      "4dcf088a80f1eaaf73b1f356f7446298",
    ],
  },
]);
