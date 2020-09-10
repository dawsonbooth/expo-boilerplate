import * as React from "react";

import { StyleSheet } from "react-native";

import { Text, TopNavigation, Divider, Layout } from "@ui-kitten/components";
import {
  SafeAreaLayout,
  SaveAreaInset,
} from "../../../components/safe-area-layout.component";

import i18n from "../../../locales";

export function HomeScreen() {
  const title = i18n.t("home.title");

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP} style={styles.screen}>
      <TopNavigation title={title} alignment="center" />
      <Divider />
      <Layout level="2" style={styles.container}>
        <Text category="h1">{title}</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
