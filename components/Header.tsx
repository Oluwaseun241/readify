import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View className="flex flex-row justify-between m-5">
      <Text className="font-[ArimaBold] text-lg">Hey Julia</Text>
      <Feather name="bell" size={25} color="black" />
    </View>
  );
};

export default Header;
