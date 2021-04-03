import { ScrollView, StyleSheet, Text, View } from "react-native";
import { defaultSpacingUnit, sizes } from "../../style/stylesheet.config";

import React from "react";
import { Spacing } from "../spacing/spacing.component";

const sizeShownPartOffset = defaultSpacingUnit / 2;

const visibleContainerWidth =
  sizes.width - defaultSpacingUnit - sizeShownPartOffset;

export const styles = StyleSheet.create({
  visibleContainer: {
    width: visibleContainerWidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  offsetContainer: {
    justifyContent: "center",
  },
});

export const ScrollRow = ({
  mainComponent = <Text>mainComponent</Text>,
  offsetComponent = <Text>offsetComponent</Text>,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      snapToInterval={visibleContainerWidth}
      decelerationRate={0}
    >
      <Spacing horizontal style={{ flexDirection: "row" }}>
        <View style={styles.visibleContainer}>{mainComponent}</View>
        <View style={styles.offsetContainer}>{offsetComponent}</View>
      </Spacing>
    </ScrollView>
  );
};
