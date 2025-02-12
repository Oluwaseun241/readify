import ScreenWrapper from "@/components/common/ScreenWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";

export default function welcome() {
  const handleWelcome = async () => {
    await AsyncStorage.setItem("hasLaunched", "true");
    router.navigate("/home");
  };
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
        <Text className="font-[ArimaBold] text-[30px]">
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
        <View className="items-center">
          <TouchableOpacity
            onPress={() => router.navigate("/home")}
            className="bg-primary-text mt-4 p-4 rounded-full w-[185px]"
          >
            <Text className="text-center font-[ArimaBold] text-primary-backgroundHeader">
              Explore
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
