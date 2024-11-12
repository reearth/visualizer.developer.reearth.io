// @ts-nocheck

type ComputedLayer = {
  id: string;
  status: "fetching" | "ready";
  layer: Layer;
  originalFeatures: Feature[];
  features: ComputedFeature[];
  properties?: any;
};
