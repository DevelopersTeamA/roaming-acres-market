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
              Animals/Livestock
            </Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1, // Allows the container to grow
                  justifyContent: "space-between", // Centers vertically
                  alignItems: "center", // Centers horizontally
                  //   paddingHorizontal: 10, // Optional: Add some padding
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
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}
