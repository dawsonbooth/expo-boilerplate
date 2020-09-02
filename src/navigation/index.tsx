import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { OopsScreen } from "../scenes/oops";
import { RootStackParamList } from "./types";
import HomeNavigator from "./home.navigator";

import * as Linking from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";

import { AppRoute } from "./app-routes";

const linking: LinkingOptions = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      [AppRoute.ROOT]: {
        screens: {
          [AppRoute.TAB_ONE]: {
            screens: {
              [AppRoute.TAB_ONE_SCREEN]: "one",
            },
          },
          [AppRoute.TAB_TWO]: {
            screens: {
              [AppRoute.TAB_TWO_SCREEN]: "two",
            },
          },
        },
      },
      [AppRoute.OOPS]: "*",
    },
  },
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoute.ROOT} component={HomeNavigator} />
      <Stack.Screen
        name={AppRoute.OOPS}
        component={OopsScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
