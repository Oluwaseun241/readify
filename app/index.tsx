import React from "react";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  const checkIfFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem("hasLauncheds");
      setIsFirstLaunch(hasLaunched === null);
    } catch (error) {
      setIsFirstLaunch(true);
    }
  };

  if (isFirstLaunch === null) {
    return null;
  }

  if (isFirstLaunch) {
    return <Redirect href="/onboarding/welcome" />;
  }
  // "/(tabs)/home"
  return <Redirect href="/home" />;
}
