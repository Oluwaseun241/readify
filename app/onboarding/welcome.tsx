import ScreenWrapper from "@/components/common/ScreenWrapper";
import { router } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";

export default function welcome() {
  return (
    <ScreenWrapper>
      <View>
        <Image
          source={require("@/assets/images/welcome.png")}
          resizeMode="contain"
          className="w-[377px] h-[467px]"
        />
      </View>
      <View className="my-4 mx-4">
        <Text className="font-[ArimaSemiBold] text-lg text-primary-textTint">
          Book app
        </Text>
        <Text className="font-[ArimaBold] text-xl">
          Reading is more {"\n"}entertaining
        </Text>
      </View>
      <View className="my-4">
        <Text className="text-center font-[ArimaMedium]">
          "Unleash your imagination!{" "}
          <Text className="font-[ArimaMedium] text-primary-textTint">
            Readify
          </Text>{" "}
          brings you {"\n"}
          an endless world of books, curated just for you.{"\n"} Browse, read,
          and enjoy!"
        </Text>
        <TouchableOpacity
          onPress={() => router.navigate("/home")}
          className="bg-primary-text items-center mt-4 p-4 rounded-full"
        >
          <Text className="font-[ArimaBold] text-primary-backgroundHeader">
            Explore
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
