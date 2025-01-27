import { ScrollView, Text, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";
import SearchInput from "@/components/Search";
import Trending from "@/components/Trending";
import Fictional from "@/components/Fictional";
import Continue from "@/components/Continue";

export default function home() {
  return (
    <ScreenWrapper>
      <Header />
      <ScrollView className="flex-1 bg-primary-background">
        <Text className="my-4 mx-5 font-[ArimaLight] text-primary-tabIconDefault">
          Are you ready for your daily goal?
        </Text>
        <SearchInput />
        <Trending />
        <Continue />
        <Fictional />
      </ScrollView>
    </ScreenWrapper>
  );
}
