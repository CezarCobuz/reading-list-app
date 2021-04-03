import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../../store/app.context";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>LoginScreen</Text>

      <Button
        title="Login"
        onPress={() =>
          setAppStore({
            ...appStore,
            user: { ...appStore.user, isLoggedIn: true },
          })
        }
      />

      <Button
        title="Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};
