export default `
type PolylineAppearance = {
  show?: boolean;
  clampToGround?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  shadows?: "disabled" | "enabled" | "cast_only" | "receive_only";
  near?: number;
  far?: number;
  classificationType?: "both" | "terrain" | "3dtiles";
  hideIndicator?: boolean;
  selectedFeatureColor?: string; // This doesn't support expression
};
`;
