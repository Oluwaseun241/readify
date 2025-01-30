import React from "react";
import { Pressable, Text, View } from "react-native";
import BackIcon from "@/assets/icon/back.svg";

interface HeaderProps {
  onBackPress: () => void; // change to navigate back with router
  rightIcon?: React.ReactNode;
  onRightPress?: () => void;
}

const HeaderWrapper: React.FC<HeaderProps> = ({
  onBackPress,
  rightIcon,
  onRightPress,
}) => {
  return (
    <View className="mb-4 flex flex-row items-center justify-between bg-primary-backgroundHeader">
      <Pressable className="mx-5" onPress={onBackPress}>
        <BackIcon width={15} height={15} />
      </Pressable>

      {rightIcon ? (
        <Pressable onPress={onRightPress} className="p-2">
          {rightIcon}
        </Pressable>
      ) : (
        <View className="w-8" /> // Placeholder to keep layout balanced
      )}
    </View>
  );
};

export default HeaderWrapper;
