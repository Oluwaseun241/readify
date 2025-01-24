import { Pressable, Text, View } from "react-native";

const Trending = () => {
  return (
    <View className="flex flex-row justify-between my-4 mx-5">
      <Text className="text-xl font-[ArimaBold]">Trending</Text>
      <Pressable>
        <Text className="font-[ArimaMedium] text-primary-textTint">
          See all
        </Text>
      </Pressable>
    </View>
  );
};

export default Trending;
