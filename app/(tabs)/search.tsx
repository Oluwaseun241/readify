import { View, Text, ScrollView } from "react-native";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import { router } from "expo-router";
import { SearchInput, TrendingSearch } from "@/components/Search";

export default function search() {
  return (
    <ScreenWrapper>
      <HeaderWrapper onBackPress={() => router.navigate("/home")} />
      <View className="flex-1 bg-primary-background">
        <Text className="font-[ArimaBold] text-xl my-5 mx-5">Search</Text>
        <SearchInput />
        <Text className="font-[ArimaBold] text-xl my-5 mx-5">Trending</Text>
        <TrendingSearch />
      </View>
    </ScreenWrapper>
  );
}
