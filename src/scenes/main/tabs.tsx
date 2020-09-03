import React from "react";
import { IconProps, Icon, IconElement } from "@ui-kitten/components";
import { SettingsNavigator } from "../settings";
import { HomeNavigator } from "../home";
import { AppRoute } from "../../navigation/app-routes";

const SettingsIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="settings-2-outline" />
);

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
);

interface Tab {
  title: string;
  icon: (props: IconProps) => IconElement;
  component: React.ComponentType<any>;
}

interface TabList {
  [AppRoute.TAB_ONE]: Tab;
  [AppRoute.TAB_TWO]: Tab;
}

export const home: Tab = {
  title: "Home",
  icon: HomeIcon,
  component: HomeNavigator,
};

export const settings: Tab = {
  title: "Settings",
  icon: SettingsIcon,
  component: SettingsNavigator,
};

export const tabs: TabList = {
  [AppRoute.TAB_ONE]: home,
  [AppRoute.TAB_TWO]: settings,
};
