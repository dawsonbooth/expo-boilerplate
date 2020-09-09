import * as React from "react";

import { StyleSheet } from "react-native";

import { Text } from "@ui-kitten/components";

type HeadingProps = {
  heading: string;
};

export const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <Text category="h5" style={styles.heading}>
      {heading}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    padding: 10,
  },
});
