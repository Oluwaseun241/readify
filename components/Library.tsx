import { LibraryData } from "@/constants/data";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Details from "@/assets/icon/details.svg";
import { router } from "expo-router";

const Item = ({ image, title, author, progress }: any) => {
  return (
    <View>
      <View className="flex flex-row justify-between my-4 mx-4">
        <View className="flex flex-row gap-4">
          <Image
            source={image}
            resizeMode="contain"
            className="w-[85px] h-[100px]"
          />
          <View className="justify-center">
            <Text className="font-[ArimaBold] text-lg">{title}</Text>
            <Text className="font-[ArimaLight] text-primary-textTint">
              {author}
            </Text>
            <Text className="font-[ArimaLight] text-primary-textTint">
              {progress}
            </Text>
          </View>
        </View>
        <Pressable
          className="justify-center"
          onPress={() => router.push("/_sitemap")}
        >
          <Details />
        </Pressable>
      </View>
      <View className="h-[0.5px] bg-gray-300 mx-4" />
    </View>
  );
};

const Library = () => {
  return (
    <View>
      <View className="mt-6 mx-5">
        <Text className="text-xl font-[ArimaBold]">Library</Text>
      </View>
      <View>
        <FlatList
          data={LibraryData}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              title={item.title}
              author={item.author}
              progress={item.progress}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Library;
