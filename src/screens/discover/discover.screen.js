import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppContext } from "../../store/app.context";
import { BookCardComponent } from "../../components/book-card/book-card.component";
import { ScrollView } from "react-native-gesture-handler";
import { Spacing } from "../../components/spacing/spacing.component";
import { screenGeneralStyle } from "../../style/stylesheet.config";

const styles = StyleSheet.create({
  screen: {
    ...screenGeneralStyle,
  },
});

export const DiscoverScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  const { loading, books } = appStore;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!loading &&
          books.map((book, idx) => {
            return (
              <Spacing bottom key={idx}>
                <BookCardComponent book={book} />
              </Spacing>
            );
          })}
      </ScrollView>
    </View>
  );
};
