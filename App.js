import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import UltraFitNavigation from "./navigation/UltraFitNavigation";
import Welcome from "./pages/Welcome";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    // BebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
    // EBGaramond: require("./assets/fonts/EBGaramond-VariableFont_wght.ttf"),
    // EBGaramondItalic: require("./assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf"),
    EBGaramondBold: require("./assets/fonts/static/EBGaramond-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <UltraFitNavigation />;
}
