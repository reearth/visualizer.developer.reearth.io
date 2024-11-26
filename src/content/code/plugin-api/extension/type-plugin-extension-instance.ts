// @ts-nocheck

type PluginExtensionInstance = {
  readonly id: string;
  readonly pluginId: string;
  readonly name: string;
  readonly extensionId: string;
  readonly extensionType: "widget" | "block" | "infoboxBlock" | "storyBlock";
  readonly runTimes: number | undefined;
};
