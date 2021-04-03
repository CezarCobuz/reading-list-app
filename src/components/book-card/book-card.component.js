import { Text, View } from "react-native";
import { colors, fontSizes, fontWeights } from "../../style/stylesheet.config";

import React from "react";
import { ScrollRow } from "../scroll-row/scroll-row.component";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSizes.smaller,
    fontWeight: fontWeights.bold,
    color: colors.dark,
  },
  authorText: {
    fontSize: fontSizes.smallest,
    color: colors.dim,
  },
});

export const BookCardComponent = ({ book }) => {
  console.log(`book`, book);
  const { title, author } = book;

  return (
    <ScrollRow
      mainComponent={
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.authorText}>{author}</Text>
        </View>
      }
      offsetComponent={
        <View>
          <Text>TODO: button for add to reading list / check</Text>
        </View>
      }
    />
  );
};
