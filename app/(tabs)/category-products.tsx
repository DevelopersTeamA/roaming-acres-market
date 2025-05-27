import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import ShopCategory from "@/components/shop-categories";

export default function CategoryLivestock() {
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
            <Text className="text-[18px]  font-bold ml-7 mt-9">
              Handmade/Homemade Products
            </Text>

            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  // paddingHorizontal: 10, // Optional: Add some padding
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

            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  // paddingHorizontal: 10, // Optional: Add some padding
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
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}
