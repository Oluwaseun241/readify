import { FictionData } from "@/constants/data";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Item = ({ image }: any) => {
  return (
    <View className="my-4 ml-5">
      <Image
        source={image}
        resizeMode="contain"
        className="w-[120px] h-[180px]"
      />
    </View>
  );
};

const Fictional = () => {
  return (
    <View>
      <View className="mt-6 mx-5">
        <Text className="text-xl font-[ArimaBold]">Fictional</Text>
      </View>
      <FlatList
        data={FictionData}
        renderItem={({ item }) => <Item image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Fictional;
