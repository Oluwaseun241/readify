import { SafeAreaView, ScrollView, Text } from "react-native";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import { router } from "expo-router";
import Library from "@/components/Library";

export default function library() {
  return (
    <ScreenWrapper>
      <HeaderWrapper onBackPress={() => router.navigate("/home")} />
      <ScrollView>
        <Library />
      </ScrollView>
    </ScreenWrapper>
  );
}
