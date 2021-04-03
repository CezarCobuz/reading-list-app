import { LoginScreen } from "../../../screens/auth/login/login.screen";
import React from "react";
import { RegisterScreen } from "../../../screens/auth/register/register.screen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
