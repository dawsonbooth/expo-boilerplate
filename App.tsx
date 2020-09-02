import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import useTheme from "./src/hooks/useTheme";
import Navigation from "./src/navigation";

export default function App() {
  const theme = useTheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar style={theme.statusBar} />
      <ApplicationProvider {...eva} theme={theme.app}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
