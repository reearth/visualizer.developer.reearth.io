// @ts-nocheck

type ComputedFeature = {
  type: "computedFeature";
  id: string; // feature ID
  geometry?: Geometry;
  interval?: [start: Date, end?: Date];
  properties?: any;
  // Map engine specific information.
  metaData?: {
    description?: string;
  };
  range?: DataRange;
  // AppearanceTypes
  marker?: MarkerAppearance;
  polyline?: PolylineAppearance;
  polygon?: PolygonAppearance;
  model?: ModelAppearance;
  "3dtiles"?: Cesium3DTilesAppearance;
};
