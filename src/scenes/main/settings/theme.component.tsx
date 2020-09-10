import * as React from "react";

import { List, ListItem, CheckBox } from "@ui-kitten/components";

import i18n from "i18n-js";
import { useSettings, State } from "../../../state";
import { Heading } from "./heading.component";

type ThemeSetting = {
  title: string;
  theme: State["settings"]["theme"];
};

type ThemeCheckBoxProps = {
  theme: State["settings"]["theme"];
};

type ThemeSettingProps = {
  item: ThemeSetting;
};

export function ThemeSettings() {
  const { settings, setTheme } = useSettings();

  const data: ThemeSetting[] = [
    { title: i18n.t("settings.theme.automatic"), theme: "no-preference" },
    { title: i18n.t("settings.theme.light"), theme: "light" },
    { title: i18n.t("settings.theme.dark"), theme: "dark" },
  ];

  const ThemeCheckBox: React.FC<ThemeCheckBoxProps> = ({ theme }) => (
    <CheckBox
      checked={settings.theme === theme}
      onChange={(checked) => {
        if (checked) setTheme(theme);
      }}
    />
  );

  const renderItem: React.FC<ThemeSettingProps> = ({ item }) => (
    <ListItem
      title={item.title}
      onPress={() => setTheme(item.theme)}
      accessoryRight={() => <ThemeCheckBox theme={item.theme} />}
    />
  );

  return (
    <>
      <Heading heading={i18n.t("settings.theme.heading")} />
      <List scrollEnabled={false} data={data} renderItem={renderItem} />
    </>
  );
}
