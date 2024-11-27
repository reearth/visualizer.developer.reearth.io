// @ts-nocheck

type PluginInfoboxBlock = Omit<
  InfoboxBlock,
  "propertyForPluginAPI" | "propertyItemsForPluginBlock"
>;

type InfoboxBlock<P = any> = {
  id: string;
  name?: string;
  pluginId?: string;
  extensionId?: string;
  extensionType?: "infoboxBlock";
  propertyId?: string;
  property?: P;
  propertyForPluginAPI?: any;
  propertyItemsForPluginBlock?: Item[];
};
