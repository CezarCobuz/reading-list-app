import { Text, View } from "react-native";

import React from "react";

export const BookCardComponent = ({ book }) => {
  console.log(`book`, book);
  const { title, author } = book;

  return (
    <View style={{ borderWidth: 2 }}>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};
