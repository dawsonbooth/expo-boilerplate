import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { AppRoute } from "../../navigation/app-routes";

import { SettingsScreen } from "./settings.component";

import { IconProps, Icon, IconElement } from "@ui-kitten/components";

import * as strings from "./strings";

export type SettingsParamList = {
  [AppRoute.SETTINGS_SCREEN]: undefined;
};

const SettingsStack = createStackNavigator<SettingsParamList>();

export function SettingsNavigator() {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen
        name={AppRoute.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}

const SettingsIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="settings-2-outline" />
);

export const tab = {
  title: strings.title,
  icon: SettingsIcon,
  component: SettingsNavigator,
};
export const path = "settings";
