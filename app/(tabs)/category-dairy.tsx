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
              Dairy/Eggs/Produce
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
                  source={require("@/assets/images/cheese.png")}
                  text="Cheese"
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
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}
