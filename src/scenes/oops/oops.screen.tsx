import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Divider } from "@ui-kitten/components";

import { RootParamList } from "../../navigation";
import { AppRoute } from "../../navigation/app-routes";
import { SafeAreaLayout } from "../../components/safe-area-layout.component";

import i18n from "../../locales";

export function OopsScreen({
  navigation,
}: StackScreenProps<RootParamList, AppRoute.OOPS>) {
  return (
    <SafeAreaLayout style={styles.screen}>
      <Text category="h3">This screen doesn't exist.</Text>
      {/* FIXME: Divider is invisible on web for some reason */}
      <Divider style={{ margin: 10 }} />
      <Button onPress={() => navigation.replace(AppRoute.MAIN)}>
        {i18n.t("oops.text")}
      </Button>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
