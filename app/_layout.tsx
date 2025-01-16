import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/assets/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    ArimaLight: require("@/assets/fonts/Arima-Light.ttf"),
    ArimaMedium: require("@/assets/fonts/Arima-Medium.ttf"),
    ArimaRegular: require("@/assets/fonts/Arima-Regular.ttf"),
    ArimaSemiBold: require("@/assets/fonts/Arima-SemiBold.ttf"),
    ArimaBold: require("@/assets/fonts/Arima-Bold.ttf"),

    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
