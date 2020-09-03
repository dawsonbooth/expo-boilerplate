import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { AppRoute } from "../../navigation/app-routes";

import { SettingsScreen } from "./settings.component";

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
