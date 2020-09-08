import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { OopsScreen } from "../scenes/oops";
import { MainNavigator } from "../scenes/main";

import { AppRoute } from "./app-routes";

import linking from "./linking";

export type RootParamList = {
  [AppRoute.MAIN]: undefined;
  [AppRoute.OOPS]: undefined;
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoute.MAIN} component={MainNavigator} />
      <Stack.Screen
        name={AppRoute.OOPS}
        component={OopsScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}
