import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BottomTabIconComponent = ({ children, focused }) => {
  return <View style={[styles.container]}>{children}</View>;
};
