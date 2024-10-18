// @ts-nocheck

type Cesium3DTilesAppearance = {
  show?: boolean;
  color?: string;
  styleUrl?: string; // url of style json file
  shadows?: "disabled" | "enabled" | "cast_only" | "receive_only";
  colorBlendMode?: "highlight" | "replace" | "mix" | "default";
  selectedFeatureColor?: string; // This doesn't support expression
  tileset?: string;
  pbr?: boolean; // physically-based rendering
  showWireframe?: boolean;
  showBoundingVolume?: boolean;
};
