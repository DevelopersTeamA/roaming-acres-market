import OrderComponent from "@/components/order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
}

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");

  const ordersData: Record<OrderStatus, Order[]> = {
    Active: [
      {
        id: 1,
        name: "Fresh Chicken Farm",
        subText: "Daily Egg Supply",
        price: 250,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/order-recived"),
      },
      {
        id: 2,
        name: "Organic Poultry Ltd.",
        subText: "Broiler Batch",
        price: 180,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/order-recived"),
      },
      {
        id: 3,
        name: "Green Farm",
        subText: "20 Chicks Order",
        price: 320,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/order-recived"),
      },
      {
        id: 4,
        name: "Sunrise Hatchery",
        subText: "Layer Birds",
        price: 500,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/order-recived"),
      },
      {
        id: 5,
        name: "Golden Eggs Ltd.",
        subText: "Egg Cartons Bulk",
        price: 420,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/order-recived"),
      },
    ],
    Completed: [
      {
        id: 6,
        name: "Completed Poultry",
        subText: "Delivered on 12 May",
        price: 200,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      },
      {
        id: 7,
        name: "Finished Order",
        subText: "Delivered on 10 May",
        price: 190,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      },
      {
        id: 8,
        name: "Egg Supply",
        subText: "Delivered on 9 May",
        price: 210,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      },
      {
        id: 9,
        name: "Organic Chicken",
        subText: "Delivered on 8 May",
        price: 275,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      },
      {
        id: 10,
        name: "Farm Order",
        subText: "Delivered on 5 May",
        price: 300,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      },
    ],
    Cancelled: [
      {
        id: 11,
        name: "Cancelled Order #1",
        subText: "Refund processed",
        price: 200,
        buttonText: "RE-ORDER",
        onPress: () => router.push("/re-order"),
      },
      {
        id: 12,
        name: "Cancelled Order #2",
        subText: "Refunded",
        price: 180,
        buttonText: "RE-ORDER",
        onPress: () => console.log("Order again"),
      },
      {
        id: 13,
        name: "Missed Delivery",
        subText: "Auto-cancelled",
        price: 250,
        buttonText: "RE-ORDER",
        onPress: () => console.log("Order again"),
      },
      {
        id: 14,
        name: "Wrong Address",
        subText: "Cancelled by user",
        price: 260,
        buttonText: "RE-ORDER",
        onPress: () => console.log("Order again"),
      },
      {
        id: 15,
        name: "No Contact",
        subText: "Couldn’t reach buyer",
        price: 220,
        buttonText: "RE-ORDER",
        onPress: () => console.log("Order again"),
      },
      {
        id: 16,
        name: "Late Payment",
        subText: "System cancelled",
        price: 310,
        buttonText: "RE-ORDER",
        onPress: () => console.log("Order again"),
      },
    ],
  };

  return (
    <ScrollView
      className="bg-white flex-1"
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

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-3 items-center">
          {(["Active", "Completed", "Cancelled"] as OrderStatus[]).map(
            (status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                className="flex-1 items-center"
              >
                <View className="flex items-center">
                  <Text
                    className={`font-bold text-xl ${
                      activeTab === status
                        ? "text-teal-600 border-b-2 border-teal-600 p-1"
                        : "text-black"
                    }`}
                  >
                    {status}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Orders List */}
        <View className="p-3">
          {ordersData[activeTab].map((order) => (
            <OrderComponent
              key={order.id}
              source={require("../../assets/images/chicken1.jpg")}
              name={order.name}
              subText={order.subText}
              price={order.price}
              buttonText={order.buttonText}
              onPress={order.onPress}
            />
          ))}
        </View>
      </Wrapper>
    </ScrollView>
  );
}
