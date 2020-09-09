import { StatusBar } from "expo-status-bar";
import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/state";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import useTheme from "./src/hooks/useTheme";
import Navigation from "./src/navigation";

const EvaApp: React.FC = () => {
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
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <EvaApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
