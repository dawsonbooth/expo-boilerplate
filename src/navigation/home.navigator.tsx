import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { TabOneScreen, TabTwoScreen, TabBar } from "../scenes/home";
import { HomeParamList, TabOneParamList, TabTwoParamList } from "./types";
import { IconElement, Icon, IconProps } from "@ui-kitten/components";
import { AppRoute } from "./app-routes";

const LayoutIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="layout-outline" />
);

const BottomTab = createBottomTabNavigator<HomeParamList>();

export default function RootNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={AppRoute.TAB_ONE}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name={AppRoute.TAB_ONE}
        component={TabOneNavigator}
        options={{ title: "Tab One", tabBarIcon: LayoutIcon }}
      />
      <BottomTab.Screen
        name={AppRoute.TAB_TWO}
        component={TabTwoNavigator}
        options={{ title: "Tab Two", tabBarIcon: LayoutIcon }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator headerMode="none">
      <TabOneStack.Screen
        name={AppRoute.TAB_ONE_SCREEN}
        component={TabOneScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator headerMode="none">
      <TabTwoStack.Screen
        name={AppRoute.TAB_TWO_SCREEN}
        component={TabTwoScreen}
      />
    </TabTwoStack.Navigator>
  );
}
