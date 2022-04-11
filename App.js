import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import InfoFit from "./pages/InfoFit";
import Welcome from "./pages/Welcome";

export default function App() {
  const [renderPage, setRenderPage] = useState(1);

  // let content = <Welcome handleStart={value}/> /* No se como recibir el valor que viene de Welcome cuando le dan click en el boton */
  // console.log(content);

  if (renderPage === 1) {
    setRenderPage(<Welcome />);
  } else if (renderPage === 2) {
    setRenderPage(<InfoFit />);
  }

  return <View>{renderPage}</View>;
}

const styles = StyleSheet.create({});
