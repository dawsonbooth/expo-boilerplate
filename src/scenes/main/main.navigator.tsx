import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import { TabBar } from "./tab-bar.component";
import { IconProps, IconElement } from "@ui-kitten/components";
import { AppRoute } from "../../navigation/app-routes";

import { SettingsNavigator } from "./settings";
import { HomeNavigator } from "./home";

import * as settings from "./settings";
import * as home from "./home";

interface Tab {
  title: string;
  icon: (props: IconProps) => IconElement;
  component: React.ComponentType<any>;
}

interface TabList {
  [AppRoute.TAB_ONE]: Tab;
  [AppRoute.TAB_TWO]: Tab;
}

export const tabs: TabList = {
  [AppRoute.TAB_ONE]: home.tab,
  [AppRoute.TAB_TWO]: settings.tab,
};

export type MainParamList = {
  [AppRoute.TAB_ONE]: undefined;
  [AppRoute.TAB_TWO]: undefined;
};

const BottomTab = createBottomTabNavigator<MainParamList>();

export function MainNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={AppRoute.TAB_ONE}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name={AppRoute.TAB_ONE}
        component={tabs[AppRoute.TAB_ONE].component}
        options={{
          title: tabs[AppRoute.TAB_ONE].title,
          tabBarIcon: tabs[AppRoute.TAB_ONE].icon,
        }}
      />
      <BottomTab.Screen
        name={AppRoute.TAB_TWO}
        component={tabs[AppRoute.TAB_TWO].component}
        options={{
          title: tabs[AppRoute.TAB_TWO].title,
          tabBarIcon: tabs[AppRoute.TAB_TWO].icon,
        }}
      />
    </BottomTab.Navigator>
  );
}
