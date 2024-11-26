// @ts-nocheck

type Widget = {
  readonly id: string;
  readonly pluginId?: string;
  readonly extensionId?: string;
  readonly property?: unknown;
  readonly propertyId?: string;
  readonly extended?: {
    horizontally: boolean;
    vertically: boolean;
  };
  readonly layout?: WidgetLayout;
};
