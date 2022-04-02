import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Header = (props) => {
  const { title } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4b0082",
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    textAlign: "center",
  },
  headerText: {
    alignItems: "center",
    alignSelf: "center",
    color: "#fffff0",
    flex: 1,
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: 'bold'
    
  },
});

export default Header;
