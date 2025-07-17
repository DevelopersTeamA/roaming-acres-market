import ProfileHeader from "@/components/profile-header";
import ShopByCategory from "@/components/shop-by-category";
import SuggestedCategoriesComponent from "@/components/suggested-categories";
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

export default function Search() {
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
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="p-4" style={{ width: "100%" }}>
          <Text className="font-bold ml-2 text-3xl">Search</Text>
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
          <View className="mt-8 px-4 mb-8">
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold mb-4">
                Suggested Categories
              </Text>
            </View>
            <View className="space-y-4">
              <SuggestedCategoriesComponent
                name="Poultry Name"
                source={require("../../assets/images/egg-tray.png")}
                buttonText="View Product"
                rating={4.7}
              />
              <SuggestedCategoriesComponent
                name="Poultry Name"
                source={require("../../assets/images/chicken1.jpg")}
                buttonText="View Product"
                rating={4.3}
              />
              <SuggestedCategoriesComponent
                name="Poultry Name"
                source={require("../../assets/images/egg-tray.png")}
                buttonText="View Product"
                rating={4.1}
              />
            </View>

            <View className="flex-row justify-between items-center pb-3 mt-6">
              <Text className="text-xl font-bold mb-4">Shop By Category</Text>
              <TouchableOpacity className="bg-white py-1 px-3 ">
                <Text className="text-primary">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="px-2">
              <View className="flex-row justify-between">
                <ShopByCategory text="Poultry Name" price={2060} />
                <ShopByCategory
                  iconState="secondary"
                  text="Poultry Name"
                  price={2060}
                  source={require("../../assets/images/egg-tray.png")}
                />
              </View>
              <View className="flex-row justify-between">
                <ShopByCategory text="Poultry Name" price={2060} />
                <ShopByCategory
                  iconState="secondary"
                  text="Poultry Name"
                  price={2060}
                  source={require("../../assets/images/egg-tray.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}
