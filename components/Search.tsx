import { View, TextInput } from "react-native";
import Search from "@/assets/icon/search.svg";

const SearchInput = () => {
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

export default SearchInput;
