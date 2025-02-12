import { ScrollView, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import { SearchInput } from "@/components/Search";
import Trending from "@/components/Trending";
import Fictional from "@/components/Fictional";
import Continue from "@/components/Continue";

export default function home() {
  return (
    <ScreenWrapper>
      <View className="flex flex-row justify-between my-4 mx-5">
        <Text className="font-[ArimaBold] text-xl">Hey Julia</Text>
        <Feather name="bell" size={25} color="black" />
      </View>

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
