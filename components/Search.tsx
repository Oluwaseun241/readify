import { View, TextInput, Text, FlatList } from "react-native";
import Search from "@/assets/icon/search.svg";
import { TrendingSearchData } from "@/constants/data";

export const SearchInput = () => {
  return (
    <View className="flex flex-row bg-primary-backgroundHeader p-5 my-4 mx-12 items-center justify-between rounded-full">
      <TextInput
        className="placeholder:text-primary-textTint font-[ArimaMedium] text-center"
        placeholder="Search available books..."
      />
      <Search />
    </View>
  );
};

const Item = ({ title }: any) => {
  return (
    <View className="flex-row mx-5 my-3 gap-5">
      <Search />
      <Text className="font-[ArimaRegular]">{title}</Text>
    </View>
  );
};

export const TrendingSearch = () => {
  return (
    <FlatList
      data={TrendingSearchData}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
