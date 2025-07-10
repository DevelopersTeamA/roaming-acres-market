import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Imported Ionicons

interface ReviewComponentProps {
  name?: string;
  avatar?: ImageSourcePropType;
  rating?: number;
  daysAgo?: number;
  review?: string;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({
  name = "Anonymous",
  avatar = require("../assets/images/Top-selling-4.png"),
  rating = 0,
  daysAgo = 0,
  review = "No review provided.",
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? "star" : "star-outline"} // ✅ filled or outlined star
          size={16}
          color={i <= rating ? "#FBBF24" : "#E5E7EB"}
          style={{ marginRight: 4 }}
        />
      );
    }
    return stars;
  };

  return (
    <View className="mb-4">
      {/* Top row */}
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-3">
          <Image
            source={avatar}
            className="w-14 h-14 rounded-full"
            resizeMode="cover"
          />
          <View>
            <Text className="font-semibold text-sm">{name}</Text>
            <View className="flex-row items-center mt-1">
              {renderStars()}
              <Text className="ml-1 text-sm text-black">
                {rating.toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-[#008080] text-sm font-medium">
          {daysAgo} Day{daysAgo === 1 ? "" : "s"} ago
        </Text>
      </View>

      {/* Review text */}
      <View className="border border-gray-300 p-3 mt-1 rounded-md">
        <Text className="text-sm text-gray-700">{review}</Text>
      </View>
    </View>
  );
};

export default ReviewComponent;
