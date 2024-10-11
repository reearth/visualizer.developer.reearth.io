export default `
type MarkerAppearance = {
  show?: boolean;
  height?: number;
  heightReference?: "none" | "clamp" | "relative";
  style?: "none" | "point" | "image";
  pointSize?: number;
  pointColor?: string;
  pointOutlineColor?: string;
  pointOutlineWidth?: number;
  image?: string;
  imageSize?: number;
  imageSizeInMeters?: boolean;
  imageHorizontalOrigin?: "left" | "center" | "right";
  imageVerticalOrigin?: "top" | "center" | "baseline" | "bottom";
  imageColor?: string;
  imageCrop?: "none" | "rounded" | "circle";
  imageShadow?: boolean;
  imageShadowColor?: string;
  imageShadowBlur?: number;
  imageShadowPositionX?: number;
  imageShadowPositionY?: number;
  label?: boolean;
  labelText?: string;
  labelPosition?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "lefttop"
    | "leftbottom"
    | "righttop"
    | "rightbottom";
  labelTypography?: {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    italic?: boolean;
    underline?: boolean;
  };
  labelBackground?: boolean;
  labelBackgroundColor?: string;
  labelBackgroundPaddingHorizontal?: number;
  labelBackgroundPaddingVertical?: number;
  extrude?: boolean;
  near?: number; //The unit is meter
  far?: number; //The unit is meter
  hideIndicator?: boolean;
  selectedFeatureColor?: string; // This doesn't support expression
};
`;
