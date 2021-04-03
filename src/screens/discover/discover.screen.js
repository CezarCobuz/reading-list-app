import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../store/app.context";
import { BookCardComponent } from "../../components/book-card/book-card.component";
import { ScrollView } from "react-native-gesture-handler";

export const DiscoverScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  const { loading, books } = appStore;

  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <ScrollView>
        {!loading &&
          books.map((book) => {
            return <BookCardComponent book={book} />;
          })}
      </ScrollView>
    </View>
  );
};
