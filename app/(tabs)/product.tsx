import Button from "@/components/button";
import ProductComponent from "@/components/product-component";
import ProductReviewComponent from "@/components/product-reviews-component";
import ProfileHeader from "@/components/profile-header";
import SuggestedCategoriesComponent from "@/components/suggested-categories";
import TopSellersComponent from "@/components/top-sellers-component";
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
  StyleSheet,
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
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showBackButton={true}>
        <View className="items-center justify-center ">
          {/* <Text className="font-bold text-3xl">My Wish</Text> */}
        </View>
        <View className="flex flex-row justify-between items-center mt-5 px-4">
          <ProductComponent />
        </View>
        <View className="flex-row justify-between items-center px-6">
          <Text className="text-xl font-bold mb-4">Suggested Categories</Text>
        </View>
        <View className="space-y-4 px-6">
          <SuggestedCategoriesComponent
            name="Poultry Name"
            source={require("../../assets/images/egg-tray.png")}
            buttonText="View Product"
            rating={4.7}
          />
          <SuggestedCategoriesComponent
            name="Poultry Name"
            source={require("../../assets/images/chicken.jpg")}
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
        <View className="pt-6 px-2">
          <Button
            showIcon={true}
            iconName="shopping-bag"
            state="primary"
            iconColor="#008080"
            iconBackground="#ffffff"
            title="ADD TO CART"
            onPress={() => router.push("/(tabs)/place-order")}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}
