import { colors, fontSizes, fontWeights } from "../../style/stylesheet.config";

import React from "react";
import { Spacing } from "../spacing/spacing.component";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: "center",
  },
  headerText: {
    fontSize: fontSizes.heading,
    fontWeight: fontWeights.bold,
    color: color.dark,
  },
});

export const HeaderComponent = ({ label }) => {
  return (
    <Spacing bottom verticalSpacingUnit={0.5} style={styles.container}>
      <Text style={styles.headerText}>{label}</Text>
    </Spacing>
  );
};
