import { HomeBottomTabsNavigator } from "../../home-bottom-tabs/home.bottom-tabs.navigator";
import { HomeScreen } from "../../../screens/home/home.screen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeBottomTabsNavigator"
        component={HomeBottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
