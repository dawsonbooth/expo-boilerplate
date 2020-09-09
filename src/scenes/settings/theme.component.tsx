import * as React from "react";

import { List, ListItem, CheckBox } from "@ui-kitten/components";

import * as strings from "./strings";
import { useSettings, State } from "../../state";
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
    { title: strings.automatic, theme: "no-preference" },
    { title: strings.light, theme: "light" },
    { title: strings.dark, theme: "dark" },
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
      <Heading heading={strings.theme} />
      <List scrollEnabled={false} data={data} renderItem={renderItem} />
    </>
  );
}
