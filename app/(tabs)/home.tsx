import { Text, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";
import SearchInput from "@/components/Search";
import Trending from "@/components/Trending";

export default function home() {
  return (
    <ScreenWrapper>
      <Header />
      <View className=" bg-primary-background">
        <Text className="my-4 mx-5 font-[ArimaLight] text-primary-tabIconDefault">
          Are you ready for your daily goal?
        </Text>
        <SearchInput />
        <Trending />
      </View>
    </ScreenWrapper>
  );
}
