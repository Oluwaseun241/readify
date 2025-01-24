import { Data } from "@/constants/data";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Item = ({ image }: any) => {
  return (
    <View className="my-4 ml-5">
      <Image source={image} resizeMode="contain" className="w-24 h-36" />
    </View>
  );
};

const Trending = () => {
  return (
    <View>
      <View className="flex flex-row justify-between my-4 mx-5">
        <Text className="text-xl font-[ArimaBold]">Trending</Text>
        <Pressable>
          <Text className="font-[ArimaMedium] text-primary-textTint">
            See all
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Trending;
