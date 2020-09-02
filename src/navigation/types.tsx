import { AppRoute } from "./app-routes";

export type RootStackParamList = {
  [AppRoute.ROOT]: undefined;
  [AppRoute.OOPS]: undefined;
};

export type HomeParamList = {
  [AppRoute.TAB_ONE]: undefined;
  [AppRoute.TAB_TWO]: undefined;
};

export type TabOneParamList = {
  [AppRoute.TAB_ONE_SCREEN]: undefined;
};

export type TabTwoParamList = {
  [AppRoute.TAB_TWO_SCREEN]: undefined;
};
