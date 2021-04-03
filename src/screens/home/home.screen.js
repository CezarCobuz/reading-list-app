import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../store/app.context";
import { Button } from "react-native";

export const HomeScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>

      <Button
        title="Log out"
        onPress={() =>
          setAppStore({
            ...appStore,
            user: { ...appStore.user, isLoggedIn: false },
          })
        }
      />
    </View>
  );
};
