import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProfileProductProps {
  name: string;
  price?: number | string;
  caption: string;
  btntext?: string;
  postImage: any;
  OnPress?: () => void;
  fontFamily?: string; // New prop for custom font
}

const ProfileProduct = ({
  name,
  price,
  caption,
  btntext = "ADD TO CART",
  postImage,
  OnPress,
  fontFamily = "System", // Default fallback font
}: ProfileProductProps) => {
  return (
    <View className="bg-white rounded-xl">
      <View className="rounded-xl overflow-hidden mb-2">
        <TouchableOpacity onPress={OnPress}>
          <Image
            source={postImage}
            className="w-full h-24"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View className="mb-1 flex-row items-center">
        <Text
          className="text-sm text-gray-900 font-bold"
          style={{ fontFamily }}
        >
          ${typeof price === "number" ? price.toFixed(2) : price}
        </Text>
        <Text
          className="text-sm text-gray-900 font-semibold ml-1 flex-1"
          numberOfLines={1}
          style={{ fontFamily }}
        >
          {name}
        </Text>
      </View>
      <Text className="text-xs text-gray-500 mb-2" style={{ fontFamily }}>
        {caption}
      </Text>
      <TouchableOpacity onPress={OnPress}>
        <Text
          className="text-teal-600 text-center text-sm font-bold"
          style={{ fontFamily }}
        >
          {btntext}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileProduct;
