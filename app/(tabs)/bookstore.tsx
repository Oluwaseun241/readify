import { SafeAreaView, ScrollView, Text } from "react-native";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import { router } from "expo-router";
import BookStore from "@/components/BookStore";

export default function bookstore() {
  return (
    <ScreenWrapper>
      <HeaderWrapper onBackPress={() => router.navigate("/home")} />
      <ScrollView className="bg-primary-background">
        <BookStore />
      </ScrollView>
    </ScreenWrapper>
  );
}
