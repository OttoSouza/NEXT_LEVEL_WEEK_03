import React from "react";

import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import Routes from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
