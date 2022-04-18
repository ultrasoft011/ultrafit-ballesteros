import InfoFit from "../pages/InfoFit";
import InfoProducts from "../pages/InfoProducts";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Welcome from "../pages/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UltraFitNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="InfoFit" component={InfoFit} />
        <Stack.Screen name="InfoProducts" component={InfoProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UltraFitNavigation;
