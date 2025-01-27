import { Colors } from "@/constants/Colors";
import { Data } from "@/constants/data";
import { Rating } from "@kolking/react-native-rating";
import { useCallback, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const Item = ({ image }: any) => {
  const [rating, setRating] = useState(0);

  // handle rating
  const handleChange = useCallback(
    (value: number) => setRating(Math.round((rating + value) * 5) / 10),
    [rating],
  );
  return (
    <View className="flex-row gap-6 p-5 my-4 ml-5 bg-primary-backgroundHeader rounded-xl">
      <Image source={image} resizeMode="contain" className="w-24 h-36" />
      <View>
        <Text className="font-[ArimaMedium] text-lg">Queen Charlotte</Text>
        <Text className="font-[ArimaLight] text-primary-textTint text-sm">
          Page 45 of 675
        </Text>
        <View className="mt-4">
          <Progress.Bar
            progress={0.3} // hard coded will change dynamically
            width={130}
            unfilledColor="#D6DAE1"
            color={Colors.primary.text}
            borderWidth={0}
          />
        </View>
        <View className="mt-4">
          <Rating size={10} rating={rating} onChange={handleChange} />
        </View>
        <Pressable
          className="mt-5 flex-row justify-end"
          onPress={() => console.log("continue reading")}
        >
          <Text className="font-[ArimaRegular]">Continue reading</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Continue = () => {
  return (
    <View>
      <View className="my-2 mx-5">
        <Text className="text-xl font-[ArimaBold]">Continue reading</Text>
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

export default Continue;
