import { BookStoreData, BookStoreGenresData } from "@/constants/data";
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
      <View className="my-4 mx-4 gap-4">
        <Text className="font-[ArimaRegular] text-lg">{genre}</Text>
        <Image
          source={image}
          resizeMode="contain"
          className="w-[150px] h-[262px]"
        />
      </View>
    </View>
  );
};

const BookStore = () => {
  return (
    <View className="mt-6">
      <View className="mx-4">
        <Text className="text-xl font-[ArimaBold]">BookStore</Text>
        <FlatList
          data={BookStoreData}
          renderItem={({ item }) => <BookItem image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="mt-4">
        <Text className="ml-4 text-xl font-[ArimaBold]">Genres</Text>
        <FlatList
          data={BookStoreGenresData}
          renderItem={({ item }) => (
            <GenresItem image={item.image} genre={item.genre} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="mt-4 mx-4">
        <Text className="text-xl font-[ArimaBold]">Free books</Text>
        <FlatList
          data={BookStoreData}
          renderItem={({ item }) => <BookItem image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BookStore;
