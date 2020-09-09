import * as Linking from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";

import * as home from "../scenes/main/home";
import * as settings from "../scenes/main/settings";
import * as oops from "../scenes/oops";

import { AppRoute } from "./app-routes";

const linking: LinkingOptions = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      [AppRoute.MAIN]: {
        screens: {
          [AppRoute.TAB_ONE]: {
            screens: {
              [AppRoute.HOME_SCREEN]: home.path,
            },
          },
          [AppRoute.TAB_TWO]: {
            screens: {
              [AppRoute.SETTINGS_SCREEN]: settings.path,
            },
          },
        },
      },
      [AppRoute.OOPS]: oops.path,
    },
  },
};

export default linking;
