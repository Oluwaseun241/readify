import { Colors } from "@/constants/Colors";
import { ScreenWrapperProps } from "@/constants/types";
import { Dimensions, Platform, StatusBar, View } from "react-native";

const { height } = Dimensions.get("window");

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS == "ios" ? height * 0.06 : 50;
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: Colors.primary.backgroundHeader,
        },
        style,
      ]}
    >
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;
