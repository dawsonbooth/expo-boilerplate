import * as React from "react";

import { StyleSheet } from "react-native";

import { Text, TopNavigation, Divider, Layout } from "@ui-kitten/components";
import { SafeAreaLayout, SaveAreaInset } from "../../components/safe-area-layout.component";

export function TabTwoScreen() {
  const title = "Tab Two";

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP} style={styles.screen}>
      <TopNavigation title={title} alignment="center" />
      <Divider />
      <Layout style={styles.container}>
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
