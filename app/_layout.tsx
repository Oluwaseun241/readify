import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "@/assets/global.css";
import CustomSplash from "./onboarding/splash";

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  let [fontsLoaded] = useFonts({
    ArimaLight: require("@/assets/fonts/Arima-Light.ttf"),
    ArimaMedium: require("@/assets/fonts/Arima-Medium.ttf"),
    ArimaRegular: require("@/assets/fonts/Arima-Regular.ttf"),
    ArimaSemiBold: require("@/assets/fonts/Arima-SemiBold.ttf"),
    ArimaBold: require("@/assets/fonts/Arima-Bold.ttf"),

    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const loadApp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        //setLoaded(true);
      }
    };
    loadApp();
  }, [fontsLoaded]);

  if (!loaded) {
    return <CustomSplash />;
  }

  return (
    <Stack>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="reading" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
