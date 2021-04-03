import "react-native-gesture-handler";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStack } from "./src/navigation/stacks/root/root.stack";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
