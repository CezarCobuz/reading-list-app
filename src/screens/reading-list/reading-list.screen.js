import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../store/app.context";

export const ReadingListScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>ReadingList</Text>
    </View>
  );
};
