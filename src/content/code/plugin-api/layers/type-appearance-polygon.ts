export default `
type PolygonAppearance = {
  show?: boolean;
  fill?: boolean;
  fillColor?: string;
  stroke?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  heightReference?: "none" | "clamp" | "relative";
  shadows?: "disabled" | "enabled" | "cast_only" | "receive_only";
  near?: number;
  far?: number;
  extrudedHeight?: number;
  classificationType?: "both" | "terrain" | "3dtiles";
  hideIndicator?: boolean;
  selectedFeatureColor?: string; // This doesn't support expression
};
`;
