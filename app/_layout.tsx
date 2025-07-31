import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Amara: require("../assets/fonts/static/Amarante-Regular.ttf"),
    Cormo: require("../assets/fonts/static/CormorantSC-Regular.ttf"),
    Joan: require("../assets/fonts/static/Joan-Regular.ttf"),
    Macondo: require("../assets/fonts/static/Macondo-Regular.ttf"),
    Nothing: require("../assets/fonts/static/NothingYouCouldDo-Regular.ttf"),
    Changa: require("../assets/fonts/variable/Changa-VariableFont_wght.ttf"),
    RedHat: require("../assets/fonts/variable/RedHatMono-VariableFont_wght.ttf"),
    Stix: require("../assets/fonts/variable/STIXTwoText-VariableFont_wght.ttf"),
    Winky: require("../assets/fonts/variable/WinkyRough-VariableFont_wght.ttf"),
    Yano: require("../assets/fonts/variable/YanoneKaffeesatz-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return <Stack />;
}
