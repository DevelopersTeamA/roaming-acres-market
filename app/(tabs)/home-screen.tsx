import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import MapView from "react-native-maps";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import ShopCategory from "@/components/shop-categories";
import NewArrival from "@/components/new-arrival-component";
import TopSelling from "@/components/top-selling";
import TopSellingProductComponent from "@/components/top-selling-product-component";
import Button from "@/components/button";

const RoamingAcresMarket = () => {
  const router = useRouter();
  const { showLocationModal: showModalParam } = useLocalSearchParams();

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (showModalParam === "true") {
      setShowLocationModal(true);
    }
  }, [showModalParam]);

  const handleConfirmLocation = () => {
    setShowLocationModal(false);
  };

  const LocationModal = () => (
    <Modal
      visible={showLocationModal}
      transparent
      animationType="slide"
      onRequestClose={() => setShowLocationModal(false)}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View
          className="bg-white rounded-t-3xl p-6"
          style={{ maxHeight: "80%" }}
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">Select Your Location</Text>
            <TouchableOpacity
              onPress={() => setShowLocationModal(false)}
              className="p-2"
            >
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="flex-row items-center py-3"
            onPress={() => setSelectedLocation("current")}
          >
            <View
              className={`p-2 rounded-full ${
                selectedLocation === "current" ? "bg-teal-100" : "bg-gray-100"
              }`}
            >
              <Ionicons
                name="navigate-circle"
                size={20}
                color={selectedLocation === "current" ? "#008080" : "#666"}
              />
            </View>
            <View className="ml-3">
              <Text
                className={`text-base ${
                  selectedLocation === "current"
                    ? "font-semibold text-teal-600"
                    : ""
                }`}
              >
                Use my current location
              </Text>
              <Text className="text-xs text-gray-500">
                Using GPS to find your exact location
              </Text>
            </View>
          </TouchableOpacity>

          <View className="my-4 rounded-lg overflow-hidden border border-gray-200">
            <MapView
              style={{ width: "100%", height: 150 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
            />
          </View>

          <Text className="text-gray-500 text-sm mb-2">SAVED ADDRESSES</Text>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity
              key={item}
              className="flex-row items-center py-3"
              onPress={() => setSelectedLocation(`home${item}`)}
            >
              <View
                className={`p-2 rounded-full ${
                  selectedLocation === `home${item}`
                    ? "bg-teal-100"
                    : "bg-gray-100"
                }`}
              >
                <FontAwesome6
                  name="house"
                  size={16}
                  color={
                    selectedLocation === `home${item}` ? "#008080" : "#666"
                  }
                />
              </View>
              <View className="ml-3">
                <Text
                  className={`text-base ${
                    selectedLocation === `home${item}`
                      ? "font-semibold text-teal-600"
                      : ""
                  }`}
                >
                  Home - 123 Main St, Apt 4B
                </Text>
                <Text className="text-xs text-gray-500">Default address</Text>
              </View>
            </TouchableOpacity>
          ))}

          <View className="mt-6 flex-row">
            <Button
              title="CONFIRM LOCATION"
              state={selectedLocation ? "primary" : "disable"}
              onPress={handleConfirmLocation}
            />
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <>
      {showLocationModal && <LocationModal />}

      <ScrollView
        className="bg-white"
        bounces={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 100 : 80,
        }}
      >
        <Wrapper showFilterButton={true} showMenuButton={true}>
          <ProfileHeader />
          <View className="p-3 ">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-2xl font-bold">Welcome</Text>
                <Text className="text-3xl font-bold mt-1">
                  Roaming Acres Market
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/notifications")}
                className="relative"
              >
                <Ionicons
                  name="notifications"
                  size={24}
                  color="white"
                  style={{
                    backgroundColor: "#008080",
                    borderRadius: 6,
                    padding: 4,
                  }}
                />
                <View
                  className="absolute bg-orange-500 rounded-full"
                  style={{ width: 10, height: 10, top: -2, right: -2 }}
                />
              </TouchableOpacity>
            </View>

            <View className="mt-4 relative">
              <TextInput
                className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
                placeholder="Search"
                placeholderTextColor="#999"
              />
              <View className="absolute left-4 top-4">
                <Ionicons name="search" size={18} color="#999" />
              </View>
            </View>
          </View>

          {/* --- Categories --- */}
          <View className="mt-6 px-3">
            <View className="flex-row justify-between items-center pb-3">
              <Text className="text-xl font-bold">Categories</Text>
              <TouchableOpacity
                onPress={() => router.push("/categories")}
                className="bg-white py-1 px-3"
              >
                <Text className="text-primary text-[#8B8B8B]">See All</Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-row justify-between items-center">
              <ShopCategory
                source={require("@/assets/images/cow.png")}
                text="Animals"
                onPress={() => router.push("/category-animals")}
              />
              <ShopCategory
                source={require("@/assets/images/yogurt.png")}
                text="Dairy"
                onPress={() => router.push("/category-dairy")}
              />
              <ShopCategory
                source={require("@/assets/images/jewelry.png")}
                text="Products"
                onPress={() => router.push("/category-products")}
              />
              <ShopCategory
                source={require("@/assets/images/tractors.png")}
                text="Equipment"
                onPress={() => router.push("/category-equipment")}
              />
            </View>
          </View>

          {/* --- New Arrivals --- */}
          <View className="mt-8 px-3">
            <View className="flex-row justify-between items-center pb-3">
              <Text className="text-xl font-bold">New Arrivals</Text>
              <TouchableOpacity
                onPress={() => router.push("/new-arrivals")}
                className="bg-white py-1 px-3"
              >
                <Text className="text-primary text-[#8B8B8B]">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row item-center justify-between space-x-6 ">
              <NewArrival price={50} />
              <NewArrival price={50} />
              <NewArrival price={50} />
            </View>
          </View>

          {/* --- Top Sellers --- */}
          <View className="mt-8 px-3">
            <View className="flex-row justify-between items-center pb-3">
              <Text className="text-xl font-bold">Top Sellers</Text>
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/top-sellers")}
                className="bg-white py-1 px-3"
              >
                <Text className="text-primary text-[#8B8B8B]">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center item-center space-x-4">
              <TopSelling
                source={require("@/assets/images/Top-selling-1.png")}
                text="Oliver"
              />
              <TopSelling
                source={require("@/assets/images/Top-selling-2.png")}
                text="Jack"
              />
              <TopSelling
                source={require("@/assets/images/Top-selling-3.png")}
                text="Jacob"
              />
              <TopSelling
                source={require("@/assets/images/Top-selling-4.png")}
                text="Charlie"
              />
            </View>
          </View>

          {/* --- Top-Selling Products --- */}
          <View className="mt-8 px-3">
            <View className="flex-row justify-between items-center pb-3">
              <Text className="text-xl font-bold">Top-Selling Products</Text>
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/top-selling-products")}
                className="bg-white py-1 px-3"
              >
                <Text className="text-primary text-[#8B8B8B]">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row space-x-4">
              <TopSellingProductComponent />
              <TopSellingProductComponent />
              <TopSellingProductComponent />
            </View>
          </View>

          {/* --- New Arrivals --- */}
          <View className="mt-8 px-3">
            <View className="flex-row justify-between items-center pb-3">
              <Text className="text-xl font-bold">Buy Again</Text>
            </View>
            <View className="flex-row item-center justify-between space-x-6 ">
              <NewArrival price={50} btnText="REORDER" />
              <NewArrival price={50} btnText="REORDER" />
              <NewArrival price={50} btnText="REORDER" />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
};

export default RoamingAcresMarket;
