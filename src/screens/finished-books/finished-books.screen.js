import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../store/app.context";

export const FinishedBooksScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>FinishedBooksScreen</Text>
    </View>
  );
};
