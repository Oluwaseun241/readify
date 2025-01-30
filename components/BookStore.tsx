import { BookStoreData } from "@/constants/data";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const BookItem = ({ image }: any) => {
  return (
    <View className="my-4 ml-0">
      <Image
        source={image}
        resizeMode="contain"
        className="w-[150px] h-[200px]"
      />
    </View>
  );
};

const GenresItem = ({ image, genre }: any) => {
  return (
    <View>
      <View className="my-4 ml-0">
        <Text className="font-[ArimaRegular] text-lg">{genre}</Text>
        <Image
          source={image}
          resizeMode="contain"
          className="w-[150px] h-[260px]"
        />
      </View>
    </View>
  );
};

const BookStore = () => {
  return (
    <View className="mt-6">
      <View className="mx-5">
        <Text className="text-xl font-[ArimaBold]">BookStore</Text>
        <FlatList
          data={BookStoreData}
          renderItem={({ item }) => <BookItem image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="mx-5">
        <Text className="text-xl font-[ArimaBold]">Genres</Text>
        <FlatList
          data={BookStoreData}
          renderItem={({ item }) => (
            <GenresItem image={item.image} genre={item.genre} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BookStore;
