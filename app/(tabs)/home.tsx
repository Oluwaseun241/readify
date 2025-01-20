import { Text, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";

export default function home() {
  return (
    <ScreenWrapper>
      <Header />
      <View className="m-5">
        <Text>Are you ready for your daily gaol?</Text>
      </View>
    </ScreenWrapper>
  );
}
