import ScreenWrapper from "@/components/common/ScreenWrapper";
import { Text } from "react-native";
import Logo from "@/assets/icon/logo.svg";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function CustomSplash() {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 5000,
      easing: Easing.out(Easing.exp),
    });
    translateY.value = withTiming(0, {
      duration: 2500,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <ScreenWrapper>
      <Animated.View
        style={animatedStyle}
        className="flex-1 flex-row gap-2.5 items-center justify-center"
      >
        <Logo />
        <Text className="font-[ArimaBold] text-[36px]">Readify</Text>
      </Animated.View>
    </ScreenWrapper>
  );
}
