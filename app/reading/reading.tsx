import ScreenWrapper from "@/components/common/ScreenWrapper";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import { router } from "expo-router";

export default function reading() {
  return (
    <ScreenWrapper>
      <HeaderWrapper onBackPress={() => router.navigate("/home")} />
    </ScreenWrapper>
  );
}
