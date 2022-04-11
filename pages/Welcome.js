import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [renderButton, setRenderButton] = useState();

  const handleStart = (props) => {
    props.onStart("2"); /* Aqui lo que quiero hacer es enviar el 2 para que renderice la otra pantalla la de InfoFit.js */
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderButton(
        <Pressable style={styles.startButton} onPress={handleStart}>
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
      console.log("This will run after 4 seconds!");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View>
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
  title: {
    fontSize: 36,
    alignItems: "center",
    alignSelf: "center",
    color: "#fff8dc",
    fontWeight: "bold",
    marginTop: 40,
    letterSpacing: 3,
    backgroundColor: "#0A87F0",
    opacity: 0.95,
    height: 48,
    width: 280,
    borderRadius: 7,
  },
  backgroundImage: {
    height: 740,
    opacity: 0.65,
    flex: 1,
  },
  startButton: {
    alignSelf: "center",
    backgroundColor: "#6A0FFF",
    borderRadius: 5,
    height: 50,
    width: 140,
    paddingTop: 3,
    marginTop: 580,
  },
});

export default Welcome;
