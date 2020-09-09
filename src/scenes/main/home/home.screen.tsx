import * as React from "react";

import { StyleSheet } from "react-native";

import { Text, TopNavigation, Divider, Layout } from "@ui-kitten/components";
import {
  SafeAreaLayout,
  SaveAreaInset,
} from "../../../components/safe-area-layout.component";

import * as strings from "./strings";

export function HomeScreen() {
  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP} style={styles.screen}>
      <TopNavigation title={strings.title} alignment="center" />
      <Divider />
      <Layout level="2" style={styles.container}>
        <Text category="h1">{strings.title}</Text>
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
