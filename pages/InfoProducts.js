import { Text, View } from "react-native";

import React from "react";

export default function InfoProducts(props) {
  console.log(props);
  return (
    <View>
      <Text>The products</Text>
      <Text>{props.text}</Text>
    </View>
  );
}
