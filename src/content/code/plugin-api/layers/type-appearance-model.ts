export default `
type ModelAppearance = {
  show?: boolean;
  url?: string;
  heightReference?: "none" | "clamp" | "relative";
  heading?: number;
  pitch?: number;
  roll?: number;
  scale?: number;
  maximumScale?: number;
  minimumPixelSize?: number;
  animation?: boolean;
  shadows?: "disabled" | "enabled" | "cast_only" | "receive_only";
  colorBlend?: "none" | "highlight" | "replace" | "mix";
  color?: string;
  colorBlendAmount?: number;
  lightColor?: string;
  near?: number;
  far?: number;
  pbr?: boolean;
  imageBasedLightIntensity?: number;
};
`;
