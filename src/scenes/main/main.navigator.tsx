import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import { tabs, TabBar } from ".";
import { AppRoute } from "../../navigation/app-routes";

import { SettingsNavigator } from "../settings";
import { HomeNavigator } from "../home";

export type MainParamList = {
  [AppRoute.TAB_ONE]: undefined;
  [AppRoute.TAB_TWO]: undefined;
};

const BottomTab = createBottomTabNavigator<MainParamList>();

export default function MainNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={AppRoute.TAB_ONE}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name={AppRoute.TAB_ONE}
        component={HomeNavigator}
        options={{
          title: tabs[AppRoute.TAB_ONE].title,
          tabBarIcon: tabs[AppRoute.TAB_ONE].icon,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.TAB_TWO}
        component={SettingsNavigator}
        options={{
          title: tabs[AppRoute.TAB_TWO].title,
          tabBarIcon: tabs[AppRoute.TAB_TWO].icon,
        }}
      />
    </BottomTab.Navigator>
  );
}
