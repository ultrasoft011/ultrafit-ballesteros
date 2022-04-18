import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Welcome = ({ navigation }) => {
  const [renderButton, setRenderButton] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderButton(
        <Pressable
          style={styles.startButton}
          onPress={() => {
            navigation.navigate("InfoFit");
          }}
        >
          <Text
            style={{
              color: "#fff8dc",
              textAlign: "center",
              fontWeight: "bold",
              paddingTop: 5,
              fontSize: 21,
            }}
          >
            Let's Start
          </Text>
        </Pressable>
      );
      console.log("This will run after 3 seconds!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.welcomeBody}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/welcome-image.png")}
      ></ImageBackground>
      <Pressable style={styles.title}>UltraFit App</Pressable>
      {renderButton}
      {/* <Pressable style={styles.startButton}>
        <Text
          style={{
            color: "#fff8dc",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 5,
            fontSize: 20,
          }}
        >
          Let's Start
        </Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBody: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    alignItems: "center",
    alignSelf: "center",
    color: "#fff8dc",
    fontWeight: "bold",
    letterSpacing: 3,
    backgroundColor: "#0A87F0",
    opacity: 0.95,
    height: 48,
    width: 280,
    borderRadius: 7,
    position: "absolute",
    top: 35,
  },
  backgroundImage: {
    height: 740,
    opacity: 0.65,
    flex: 1,
  },
  startButton: {
    alignSelf: "center",
    backgroundColor: "#6A0FFF",
    position: "absolute",
    borderRadius: 5,
    height: 50,
    width: 140,
    paddingTop: 3,
    top: 590,
  },
});

export default Welcome;
