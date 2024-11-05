// @ts-nocheck

type Layer = {
  id: string; // A unique identifier for the layer.
  title?: string;
  visible?: boolean; // Flag indicating whether the layer is visible by default. Default is true
  infobox?: Infobox<IBP>; // An infobox that can display additional interactive or informational content
  type: "simple";
  data?: {
    type:
      | "geojson"
      | "3dtiles"
      | "osm-buildings"
      | "google-photorealistic"
      | "czml"
      | "csv"
      | "wms"
      | "mvt"
      | "kml"
      | "gpx"
      | "shapefile"
      | "gtfs"
      | "gml"
      | "georss"
      | "gltf"
      | "tiles"
      | "tms"
      | "heatMap";
    url?: string; // URL of data source
    value?: any;
    layers?: string | string[];
    jsonProperties?: string[];
    isSketchLayer?: boolean;
    updateInterval?: number; // milliseconds
    parameters?: Record<string, any>;
    idProperty?: string;
    time?: {
      property?: string;
      interval?: number; // milliseconds
      updateClockOnLoad?: boolean;
    };
    csv?: {
      idColumn?: string | number;
      latColumn?: string | number;
      lngColumn?: string | number;
      heightColumn?: string | number;
      noHeader?: boolean;
      disableTypeConversion?: boolean;
    };
    geojson?: {
      useAsResource?: boolean;
    };
  };
  properties?: any;
  defines?: Record<string, string>;
  events?: Events;
  layerStyleId?: string;
  marker?: MarkerAppearance;
  polyline?: PolylineAppearance;
  polygon?: PolygonAppearance;
  model?: ModelAppearance;
  "3dtiles"?: Cesium3DTilesAppearance;
};
