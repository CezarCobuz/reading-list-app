import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../store/app.context";

export const DiscoverScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>DiscoverScreen</Text>
    </View>
  );
};
