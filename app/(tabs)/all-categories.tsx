import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import ShopCategory from "@/components/shop-categories";

export default function Categories() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="mb-16">
            <Text className="text-[25px] text-center font-bold ml-9 mt-4">
              Our Categories
            </Text>
            <Text className="text-[18px]  font-bold ml-7 mt-9">Livestock</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/cow.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/pig.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sheep.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">Poultry</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/chicken.png")}
                  text="Chicken"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/geese.png")}
                  text="Geese"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/turkeys.png")}
                  text="Turkeys"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/ducks.png")}
                  text="Ducks"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Other Animals
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/rabbits.png")}
                  text="Rabbits"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/imagedog.png")}
                  text="Dogs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/ferret.png")}
                  text="Ferret"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/hamster.png")}
                  text="Hamster"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Homegrown Produce
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/apple.png")}
                  text="Apple"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/berries.png")}
                  text="Berries"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/tomatoes.png")}
                  text="Tomatoes"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/potatoes.png")}
                  text="Potatoes"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Eggs and Dairy
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/yogurt.png")}
                  text="Yogurt"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/egg.png")}
                  text="Eggs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/butter.png")}
                  text="Butter"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Cheese"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Homemade Canned or Baked Goods
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/fruits.png")}
                  text="Fruits"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/meats.png")}
                  text="Meats"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/cookies.png")}
                  text="Cookies"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/breads.png")}
                  text="Breads"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Handmade Products
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/candles.png")}
                  text="Candles"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/jewelry.png")}
                  text="Jewelry"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sweets.png")}
                  text="Sweets"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/soap.png")}
                  text="Soap"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Agricultural Equipment and Supplies
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  paddingHorizontal: 10, // Optional: Add some padding
                }}
              >
                <ShopCategory
                  source={require("@/assets/images/tractors.png")}
                  text="Tractors"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/seed-drills.png")}
                  text="Seed Drills"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sprayer.png")}
                  text="Sprayer"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/harvesters.png")}
                  text="Harvesters"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}
