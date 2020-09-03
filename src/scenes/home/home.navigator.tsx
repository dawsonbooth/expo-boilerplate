import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { AppRoute } from "../../navigation/app-routes";

import { HomeScreen } from "./home.component";

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
