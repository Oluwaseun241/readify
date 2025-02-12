import ScreenWrapper from "@/components/common/ScreenWrapper";
import { Text, View } from "react-native";
import Logo from "@/assets/icon/logo.svg";

export default function splash() {
  return (
    <ScreenWrapper>
      <View className="flex items-center justify-center">
        <Logo />
        <Text className="font-[ArimaBold] text-[36px]">Readify</Text>
      </View>
    </ScreenWrapper>
  );
}
