import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View className="flex flex-row justify-between my-4 mx-5">
      <Text className="font-[ArimaBold] text-xl">Hey Julia</Text>
      <Feather name="bell" size={25} color="black" />
    </View>
  );
};

export default Header;
