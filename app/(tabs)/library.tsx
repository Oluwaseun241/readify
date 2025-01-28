import { SafeAreaView, ScrollView, Text } from "react-native";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import { router } from "expo-router";

export default function library() {
  return (
    <ScreenWrapper>
      <HeaderWrapper onBackPress={() => router.navigate("/home")} />
      <ScrollView></ScrollView>
    </ScreenWrapper>
  );
}
