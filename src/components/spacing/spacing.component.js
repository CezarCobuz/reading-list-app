import { StyleSheet, View } from "react-native";

import React from "react";
import { defaultSpacingUnit } from "../../style/stylesheet.config";

const getStyles = (verticalSpacingUnit, horizontalSpacingUnit) => {
  const defaultValue = defaultSpacingUnit;

  const verticalValue = verticalSpacingUnit * defaultValue;
  const horizontalValue = horizontalSpacingUnit * defaultValue;

  const styles = StyleSheet.create({
    vertical: {
      paddingTop: verticalValue,
      paddingBottom: verticalValue,
    },
    horizontal: {
      paddingLeft: horizontalValue,
      paddingRight: horizontalValue,
    },
    left: {
      paddingLeft: horizontalValue,
    },
    right: {
      paddingRight: horizontalValue,
    },
    top: {
      paddingTop: verticalValue,
    },
    bottom: {
      paddingBottom: verticalValue,
    },
  });

  return styles;
};

/**
 * Wrapper View component for space consistency through out the app
 * @param children
 * @param vertical
 * @param verticalSpacingUnit
 * @param horizontal
 * @param horizontalSpacingUnit
 * @param left
 * @param right
 * @param top
 * @param bottom
 * @param style - extra style passed
 */
export const Spacing = ({
  children,
  vertical = false,
  verticalSpacingUnit = 1,
  horizontal = false,
  horizontalSpacingUnit = 1,
  left = false,
  right = false,
  top = false,
  bottom = false,

  style = null,
}) => {
  const styles = getStyles(verticalSpacingUnit, horizontalSpacingUnit);

  return (
    <View
      style={[
        vertical ? styles.vertical : null,
        horizontal ? styles.horizontal : null,
        left ? styles.left : null,
        right ? styles.right : null,
        top ? styles.top : null,
        bottom ? styles.bottom : null,
        style,
      ]}
    >
      {children}
    </View>
  );
};
