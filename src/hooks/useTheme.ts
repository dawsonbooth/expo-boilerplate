import * as eva from "@eva-design/eva";
import { StatusBarStyle } from "expo-status-bar";
import { useColorScheme } from "react-native-appearance";

interface Theme {
  app: typeof eva.light;
  statusBar: StatusBarStyle;
}

export default function useTheme(): Theme {
  // TODO: Use Redux hook along with useColorScheme to get user-selected theme
  const colorScheme = useColorScheme();

  if (colorScheme === "light")
    return {
      app: eva.light,
      statusBar: "dark",
    };
  return {
    app: eva.dark,
    statusBar: "light",
  };
}
