import ProfileHeader from "@/components/profile-header";
import WishlistComponent from "@/components/wishlist-component";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function WishList() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Animals/Livestock",
    "Dairy/Eggs/Produce",
    "Handmade/Homemade Products",
    "Equipment",
  ];
  return (
    <ScrollView
      className="bg-white "
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4" style={{ width: "100%" }}>
          <View className="mt-4 relative">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search"
              placeholderTextColor="#8391A1"
            />

            <View className="absolute left-4 top-4">
              <Ionicons name="search" size={18} color="#8391A1" />
            </View>
          </View>
        </View>
        <View className="bg-white py-2">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category}
                className={`px-6 py-2 rounded-lg mr-2 border-teal-600 ${
                  activeCategory === category
                    ? "bg-teal-600"
                    : "bg-white border "
                }`}
                onPress={() => setActiveCategory(category)}
                style={{ marginRight: index === categories.length - 1 ? 0 : 8 }}
              >
                <Text
                  className={`text-sm font-medium ${
                    activeCategory === category ? "text-white" : "text-teal-600"
                  }`}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className=" items-center justify-center mt-5">
          <Text className="font-bold text-3xl">My Wish Lists</Text>
        </View>
        <View className="flex  flex-row justify-evenly items-center mt-5">
          <View style={{ width: 160 }}>
            <WishlistComponent
              onPress={() => router.push("/(tabs)/inventory-product-details")}
              iconName={"plus"}
              buttonText={"ADD TO CART"}
            />
          </View>
          <View style={{ width: 160 }}>
            <WishlistComponent
              onPress={() => router.push("/(tabs)/inventory-product-details")}
              iconName={"plus"}
              buttonText={"ADD TO CART"}
            />
          </View>
        </View>
        <View className="flex flex-row justify-evenly items-center mt-5">
          <View style={{ width: 160 }}>
            <WishlistComponent
              onPress={() => router.push("/(tabs)/inventory-product-details")}
              iconName={"plus"}
              buttonText={"ADD TO CART"}
            />
          </View>
          <View style={{ width: 160 }}>
            <WishlistComponent
              onPress={() => router.push("/(tabs)/inventory-product-details")}
              iconName={"plus"}
              buttonText={"ADD TO CART"}
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}
