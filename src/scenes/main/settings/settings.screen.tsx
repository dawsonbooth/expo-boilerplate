import * as React from "react";

import { StyleSheet } from "react-native";

import { TopNavigation, Divider, Layout } from "@ui-kitten/components";
import {
  SafeAreaLayout,
  SaveAreaInset,
} from "../../../components/safe-area-layout.component";

import { ThemeSettings } from "./theme.component";

import i18n from "i18n-js";

export function SettingsScreen() {
  const title = i18n.t("settings.title");

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP} style={styles.screen}>
      <TopNavigation title={title} alignment="center" />
      <Divider />
      <Layout level="2" style={styles.container}>
        <ThemeSettings />
      </Layout>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
