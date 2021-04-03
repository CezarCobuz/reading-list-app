import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  colors,
  fontSizes,
  fontWeights,
  screenGeneralStyle,
} from "../../style/stylesheet.config";

import { AppContext } from "../../store/app.context";
import { HeaderComponent } from "../../components/header/header.component";
import { Spacing } from "../../components/spacing/spacing.component";

const styles = StyleSheet.create({
  screen: {
    ...screenGeneralStyle,
  },
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
});

export const ReadingListScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  const { loading, readingList } = appStore;

  return (
    <View style={styles.screen}>
      <HeaderComponent label="Reading List" />
      <Spacing horizontal>
        <ScrollView showsVerticalScrollIndicator={false}>
          {!loading &&
            readingList.map((book, idx) => {
              const { title, author, publisher } = book;

              // TODO: Create a dumb component and reuse in discover main component of ScrollRow
              return (
                <Spacing bottom key={idx}>
                  <View>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.authorText}>{author}</Text>
                    <Spacing bottom verticalSpacingUnit={0.25} />
                    <Text style={styles.publisherText}>{publisher}</Text>
                  </View>
                </Spacing>
              );
            })}
        </ScrollView>
      </Spacing>
    </View>
  );
};
