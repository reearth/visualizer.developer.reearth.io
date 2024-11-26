// @ts-nocheck

type PluginStoryBlock = Omit<
  StoryBlock,
  "propertyForPluginAPI" | "propertyItemsForPluginBlock"
>;

type StoryBlock = {
  id: string;
  name?: string | null;
  pluginId: string;
  extensionId: string;
  extensionType?: "storyBlock";
  propertyId?: string;
  property?: any;
  propertyForPluginAPI?: any;
  propertyItemsForPluginBlock?: Item[];
};
