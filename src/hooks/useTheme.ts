import * as eva from "@eva-design/eva";
import { StatusBarStyle } from "expo-status-bar";
import { useColorScheme } from "react-native-appearance";
import { useSettings } from "../state";

const custom = {
  "color-primary-100": "#C7F9E0",
  "color-primary-200": "#92F4CC",
  "color-primary-300": "#59DFB4",
  "color-primary-400": "#30C09F",
  "color-primary-500": "#009682",
  "color-primary-600": "#00817B",
  "color-primary-700": "#00666C",
  "color-primary-800": "#004A57",
  "color-primary-900": "#003648",
  "color-primary-transparent-100": "rgba(0, 150, 130, 0.08)",
  "color-primary-transparent-200": "rgba(0, 150, 130, 0.16)",
  "color-primary-transparent-300": "rgba(0, 150, 130, 0.24)",
  "color-primary-transparent-400": "rgba(0, 150, 130, 0.32)",
  "color-primary-transparent-500": "rgba(0, 150, 130, 0.4)",
  "color-primary-transparent-600": "rgba(0, 150, 130, 0.48)",
  "color-success-100": "#E9FAD1",
  "color-success-200": "#CFF5A4",
  "color-success-300": "#A6E373",
  "color-success-400": "#7DC74C",
  "color-success-500": "#49A31D",
  "color-success-600": "#348C15",
  "color-success-700": "#23750E",
  "color-success-800": "#145E09",
  "color-success-900": "#0A4E05",
  "color-success-transparent-100": "rgba(73, 163, 29, 0.08)",
  "color-success-transparent-200": "rgba(73, 163, 29, 0.16)",
  "color-success-transparent-300": "rgba(73, 163, 29, 0.24)",
  "color-success-transparent-400": "rgba(73, 163, 29, 0.32)",
  "color-success-transparent-500": "rgba(73, 163, 29, 0.4)",
  "color-success-transparent-600": "rgba(73, 163, 29, 0.48)",
  "color-info-100": "#CFE7FE",
  "color-info-200": "#A1CDFD",
  "color-info-300": "#71AEFB",
  "color-info-400": "#4D92F7",
  "color-info-500": "#1566F2",
  "color-info-600": "#0F4ED0",
  "color-info-700": "#0A3AAE",
  "color-info-800": "#06288C",
  "color-info-900": "#041C74",
  "color-info-transparent-100": "rgba(21, 102, 242, 0.08)",
  "color-info-transparent-200": "rgba(21, 102, 242, 0.16)",
  "color-info-transparent-300": "rgba(21, 102, 242, 0.24)",
  "color-info-transparent-400": "rgba(21, 102, 242, 0.32)",
  "color-info-transparent-500": "rgba(21, 102, 242, 0.4)",
  "color-info-transparent-600": "rgba(21, 102, 242, 0.48)",
  "color-warning-100": "#FFF8CC",
  "color-warning-200": "#FFEE99",
  "color-warning-300": "#FFE267",
  "color-warning-400": "#FFD741",
  "color-warning-500": "#FFC402",
  "color-warning-600": "#DBA301",
  "color-warning-700": "#B78401",
  "color-warning-800": "#936600",
  "color-warning-900": "#7A5200",
  "color-warning-transparent-100": "rgba(255, 196, 2, 0.08)",
  "color-warning-transparent-200": "rgba(255, 196, 2, 0.16)",
  "color-warning-transparent-300": "rgba(255, 196, 2, 0.24)",
  "color-warning-transparent-400": "rgba(255, 196, 2, 0.32)",
  "color-warning-transparent-500": "rgba(255, 196, 2, 0.4)",
  "color-warning-transparent-600": "rgba(255, 196, 2, 0.48)",
  "color-danger-100": "#FCD8D2",
  "color-danger-200": "#FAAAA7",
  "color-danger-300": "#F1787F",
  "color-danger-400": "#E3556A",
  "color-danger-500": "#D1234E",
  "color-danger-600": "#B3194E",
  "color-danger-700": "#96114C",
  "color-danger-800": "#790B46",
  "color-danger-900": "#640641",
  "color-danger-transparent-100": "rgba(209, 35, 78, 0.08)",
  "color-danger-transparent-200": "rgba(209, 35, 78, 0.16)",
  "color-danger-transparent-300": "rgba(209, 35, 78, 0.24)",
  "color-danger-transparent-400": "rgba(209, 35, 78, 0.32)",
  "color-danger-transparent-500": "rgba(209, 35, 78, 0.4)",
  "color-danger-transparent-600": "rgba(209, 35, 78, 0.48)",
};

interface Theme {
  app: typeof eva.light;
  statusBar: StatusBarStyle;
}

function useLightTheme(): Theme {
  return {
    app: { ...eva.light, ...custom },
    statusBar: "dark",
  };
}

function useDarkTheme(): Theme {
  return {
    app: { ...eva.dark, ...custom },
    statusBar: "light",
  };
}

export default function useTheme(): Theme {
  const colorScheme = useColorScheme();
  const { settings } = useSettings();

  const theme = settings.theme === "no-preference" ? colorScheme : settings.theme;

  if (theme === "light") return useLightTheme();
  return useDarkTheme();
}
