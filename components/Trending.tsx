import { TrendingData } from "@/constants/data";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Item = ({ image }: any) => {
  return (
    <View className="my-4 ml-5">
      <Image
        source={image}
        resizeMode="contain"
        className="w-[85px] h-[127px]"
      />
    </View>
  );
};

const Trending = () => {
  return (
    <View className="mt-0">
      <View className="flex flex-row justify-between mx-5">
        <Text className="text-xl font-[ArimaBold]">Trending</Text>
        <Pressable onPress={() => console.log("See all")}>
          <Text className="font-[ArimaMedium] text-primary-textTint">
            See all
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={TrendingData}
        renderItem={({ item }) => <Item image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Trending;
