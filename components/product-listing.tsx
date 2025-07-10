import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Ionicons import

interface ProductCardProps {
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
  brand: string;
  productName: string;
  price: number;
  originalPrice: number;
  savings: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  onPress,
  imageSource = require("../assets/images/top-selling.png"),
  brand,
  productName,
  price,
  originalPrice,
  savings,
  rating,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="rounded-lg p-4 mt-4 shadow-lg bg-white"
    >
      <View className="flex-row items-center">
        {/* Image */}
        <View className="mr-3 rounded-lg border border-[#008080] px-2 py-2">
          <Image
            source={imageSource}
            resizeMode="cover"
            className="w-20 h-24"
          />
        </View>

        {/* Product Info */}
        <View className="flex-1 justify-center">
          <Text className="font-semibold text-sm mb-1">
            {brand} {productName}
          </Text>
          <Text className="text-base">
            Price : <Text className="font-semibold">${price}</Text>{" "}
            <Text className="line-through text-gray-400">${originalPrice}</Text>
          </Text>
          <Text className="text-sm text-green-700 mt-1">Save : ${savings}</Text>

          <View className="flex-row items-center mt-2">
            <Ionicons name="star" size={16} color="#F97316" /> {/* ✅ Updated */}
            <Text className="ml-1 text-sm font-medium">{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
