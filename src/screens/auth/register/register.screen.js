import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../../../store/app.context";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const [appStore, setAppStore] = useContext(AppContext);

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "coral", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>RegisterScreen</Text>

      <Button
        title="Have an account already? Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};
