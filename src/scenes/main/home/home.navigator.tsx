import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { AppRoute } from "../../../navigation/app-routes";

import { HomeScreen } from "./home.screen";

import { IconProps, Icon, IconElement } from "@ui-kitten/components";

import i18n from "../../../locales";

export type HomeParamList = {
  [AppRoute.HOME_SCREEN]: undefined;
};

const HomeStack = createStackNavigator<HomeParamList>();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name={AppRoute.HOME_SCREEN} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
);

export const tab = {
  title: i18n.t("home.title"),
  icon: HomeIcon,
  component: HomeNavigator,
};
export const path = "home";
