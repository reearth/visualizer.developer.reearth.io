// @ts-nocheck

type Feature = {
  type: "feature" | "computedFeature";
  id: string; // feature ID
  geometry?: Geometry;
  interval?: [start: Date, end?: Date];
  properties?: any;
  // Map engine specific information.
  metaData?: {
    description?: string;
  };
  range?: DataRange;
};
