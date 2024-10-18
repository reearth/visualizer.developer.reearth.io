// @ts-nocheck

type LazyLayer = Readonly<Layer> & {
  computed?: Readonly<ComputedLayer>;
  isTempLayer?: boolean;
  pluginId?: string;
  extensionId?: string;
  property?: any;
  propertyId?: string;
  isVisible?: boolean;
};
