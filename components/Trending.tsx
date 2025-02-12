import { TrendingData } from "@/constants/data";
import { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedRef,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";

const Item = ({ image }: any) => {
  return (
    <View className="my-4 ml-5">
      <Image
        source={image}
        resizeMode="contain"
        className="w-[85px] h-[127px]"
      />
    </View>
  );
};

const Trending = () => {
  const scrollX = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  useEffect(() => {
    scrollX.value = withRepeat(
      withSequence(
        withTiming(500, { duration: 5000, easing: Easing.linear }),
        withTiming(0, { duration: 5000, easing: Easing.linear }),
      ),
      -1, // Infinite loop
      false,
    );

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: scrollX.value, animated: true });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="mt-2">
      <View className="flex flex-row justify-between mx-5">
        <Text className="text-xl font-[ArimaBold]">Trending</Text>
        <Pressable onPress={() => console.log("See all")}>
          <Text className="font-[ArimaMedium] text-primary-textTint">
            See all
          </Text>
        </Pressable>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {TrendingData.map((item) => (
          <Item key={item.id} image={item.image} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Trending;
