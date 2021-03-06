import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import {
  colors,
  defaultSpacingUnit,
  fontSizes,
  fontWeights,
} from "../../style/stylesheet.config";

import { AppContext } from "../../store/app.context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollRow } from "../scroll-row/scroll-row.component";
import { Spacing } from "../spacing/spacing.component";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import _ from "lodash";

const outlinedButtonSize = defaultSpacingUnit * 2.5;

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    color: colors.dark,
  },
  authorText: {
    fontSize: fontSizes.small,
    color: colors.dim,
  },
  publisherText: {
    fontSize: fontSizes.smallest,
    color: colors.dim,
  },
  offsetComponentContainer: {
    flexDirection: "row",
  },
  outlinedButton: {
    width: outlinedButtonSize,
    height: outlinedButtonSize,
    borderRadius: outlinedButtonSize / 2,
    borderWidth: 2,
    borderColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  starSelected: {
    borderColor: colors.primary.main,
    backgroundColor: colors.primary.main,
  },
  readSelected: {
    borderColor: colors.tertiary.main,
    backgroundColor: colors.tertiary.main,
  },
});

export const BookCardComponent = ({ book }) => {
  const { title, author, publisher } = book;

  const [stared, setStared] = useState(false);
  const [read, setRead] = useState(false);

  const [appStore, setAppStore] = useContext(AppContext);
  const { readingList } = appStore;

  return (
    <ScrollRow
      mainComponent={
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.authorText}>{author}</Text>
          <Spacing bottom verticalSpacingUnit={0.25} />
          <Text style={styles.publisherText}>{publisher}</Text>
        </View>
      }
      offsetComponent={
        <View style={styles.offsetComponentContainer}>
          {/* Stared  */}
          <TouchableOpacity
            style={[styles.outlinedButton, stared ? styles.starSelected : null]}
            onPress={() => {
              if (stared === false) {
                // Add to favorites - reading list
                const newFavorites = [...readingList];
                if (newFavorites.includes(book) === false) {
                  newFavorites.push(book);
                  setAppStore({ ...appStore, readingList: newFavorites });
                }
              } else {
                // Remove from favorites
                const newFavorites = _.without([...readingList], book);
                setAppStore({ ...appStore, readingList: newFavorites });
              }

              setStared(!stared);
            }}
          >
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={defaultSpacingUnit * 1.5}
              color={stared ? colors.light : colors.dark}
            />
          </TouchableOpacity>
          <Spacing right />
          {/* Read  */}
          <TouchableOpacity
            style={[styles.outlinedButton, read ? styles.readSelected : null]}
            onPress={() => {
              setRead(!read);
              // TODO: Remove from reading list
            }}
          >
            <MaterialCommunityIcons
              name="bookmark-check"
              size={defaultSpacingUnit * 1.5}
              color={read ? colors.light : colors.dark}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
};
