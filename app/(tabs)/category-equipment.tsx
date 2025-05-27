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
            <Text className="text-[18px]  font-bold ml-7 mt-9">Equipment</Text>
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
