import { ColorSchemeName } from "react-native-appearance";

export interface State {
  settings: Settings;
}

export interface Settings {
  theme: ColorSchemeName;
}

export interface Action {
  type: string;
  theme?: string;
}
