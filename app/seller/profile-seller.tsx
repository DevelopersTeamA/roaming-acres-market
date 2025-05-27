import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "./../../components/button";
import NotificationComponent from "@/components/notification-component";
import ProfilePost from "./../../components/profile-post";
import ProfileProduct from "@/components/profile-product";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultProfileImage: ImageSourcePropType = require("../../assets/images/profile.png");
const defaultBackgroundImage: ImageSourcePropType = require("../../assets/images/profilebg.png");

export default function SellerProfile() {
  const [activeTab, setActiveTab] = useState("Posts");
  const router = useRouter();
  const postImage: ImageSourcePropType = require("../../assets/images/post-chicken.png");

  const [profileImageUri, setProfileImageUri] = useState<string | null>(null);
  const [bannerImageUri, setBannerImageUri] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string>("System");

  useEffect(() => {
    const loadAssets = async () => {
      const storedProfile = await AsyncStorage.getItem("profileImage");
      const storedBanner = await AsyncStorage.getItem("bannerImage");
      const storedFont = await AsyncStorage.getItem("preferredFont");

      if (storedProfile) setProfileImageUri(storedProfile);
      if (storedBanner) setBannerImageUri(storedBanner);
      if (storedFont) setSelectedFont(storedFont);
    };

    loadAssets();
  }, []);

  const product = [
    {
      id: 1,
      name: "Fresh Chicken Farm",
      subText: "Daily Egg Supply",
      price: 250,
      buttonText: "TRACK ORDER",
    },
    {
      id: 2,
      name: "Organic Poultry Ltd.",
      subText: "Broiler Batch",
      price: 180,
      buttonText: "TRACK ORDER",
    },
    {
      id: 3,
      name: "Green Farm",
      subText: "20 Chicks Order",
      price: 320,
      buttonText: "TRACK ORDER",
    },
  ];

  const post = [
    {
      id: 6,
      name: "Completed Poultry",
      subText: "Delivered on 12 May",
      description: 200,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 7,
      name: "Finished Order",
      subText: "Delivered on 10 May",
      description: 190,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 8,
      name: "Egg Supply",
      subText: "Delivered on 9 May",
      description: 210,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 9,
      name: "Organic Chicken",
      subText: "Delivered on 8 May",
      description: 275,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 10,
      name: "Farm Order",
      subText: "Delivered on 5 May",
      description: 300,
      buttonText: "LEAVE REVIEW",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View className="flex-1 bg-[#FDFDFD] items-center">
        <ImageBackground
          source={
            bannerImageUri ? { uri: bannerImageUri } : defaultBackgroundImage
          }
          resizeMode="cover"
          className="w-full h-[250px] justify-center items-center bg-white"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-6 left-4 z-10"
          >
            <View className="w-9 h-9 bg-white rounded-xl mt-7 justify-center items-center">
              <Ionicons name="chevron-back-outline" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <View className="items-center" style={{ marginTop: 150 }}>
            <Image
              source={
                profileImageUri ? { uri: profileImageUri } : defaultProfileImage
              }
              className="w-40 h-40 rounded-full border-[7px] border-white mt-20"
            />
            <Text
              className="text-lg mt-2"
              style={{ fontFamily: selectedFont, color: "#000" }}
            >
              Try Temp
            </Text>
            <Text
              className="text-sm text-gray-500"
              style={{ fontFamily: selectedFont }}
            >
              Joined Roaming Acres Market in 2000
            </Text>
            <Text
              className="text-sm text-gray-500"
              style={{ fontFamily: selectedFont }}
            >
              00+ Active Listings
            </Text>
          </View>
        </ImageBackground>

        <View
          className="px-4 flex flex-row justify-center items-center"
          style={{ marginTop: 100 }}
        >
          <Pressable
            onPress={() => router.push("/seller/select-uploading")}
            className="bg-[#008080] px-6 py-3 rounded-md flex-1 flex-row justify-center items-center mr-2"
          >
            <Text
              className="text-white text-center font-semibold"
              style={{ fontFamily: selectedFont }}
            >
              Add
            </Text>
            <Ionicons
              name="add-outline"
              size={18}
              color="white"
              className="pl-2"
            />
          </Pressable>

          <Pressable
            onPress={() => router.push("/seller/profile")}
            className="bg-[#008080] px-6 py-3 rounded-md flex-1 flex-row justify-center items-center mr-2"
          >
            <Text
              className="text-white text-center font-semibold"
              style={{ fontFamily: selectedFont }}
            >
              Edit Profile
            </Text>
          </Pressable>
        </View>

        <View className="px-4 py-6 w-full bg-white mx-4 my-2">
          <Text
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: selectedFont }}
          >
            About Me
          </Text>

          <View className="flex-row items-center mb-3">
            <Entypo name="location-pin" size={18} color="#4B5563" />
            <Text
              className="ml-2 text-gray-700 "
              style={{ fontFamily: selectedFont }}
            >
              Location
            </Text>
            <Text
              className="ml-2 text-[#9796A1]"
              style={{ fontFamily: selectedFont }}
            >
              Seller Profile About Details...
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <MaterialIcons name="store" size={18} color="#4B5563" />
            <Text
              className="ml-2 text-gray-700 "
              style={{ fontFamily: selectedFont }}
            >
              Shop Name
            </Text>
            <Text
              className="ml-2 text-[#9796A1]"
              style={{ fontFamily: selectedFont }}
            >
              Joined this market place
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <Text
              className="ml-4 text-gray-700 font-bold"
              style={{ fontFamily: selectedFont }}
            >
              Rating:
            </Text>
            <FontAwesome
              name="star"
              size={18}
              color="#FBBF24"
              className="ml-2"
            />
            <Text
              className="ml-2 text-gray-700"
              style={{ fontFamily: selectedFont }}
            >
              4.7
            </Text>
          </View>
        </View>

        <View className="bg-white mt-4 w-full">
          <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
            {["Posts", "Products"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                className="flex-1 items-center"
              >
                <Text
                  className={`font-bold text-xl ${
                    activeTab === status
                      ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                      : "text-black"
                  }`}
                  style={{ fontFamily: selectedFont }}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="p-2">
            {activeTab === "Products" && (
              <View>
                <Text
                  className="text-lg mb-2"
                  style={{ fontFamily: selectedFont }}
                >
                  Product Section
                </Text>
                <View className="flex flex-row flex-wrap justify-between">
                  {product.map((item) => (
                    <View key={item.id} className="w-[30%] m-[1.5%]">
                      <ProfileProduct
                        name={item.name}
                        price={item.price}
                        caption="Lorem ipsum is simply dummy text printing and typesetting."
                        postImage={require("../../assets/images/post-chicken.png")}
                        btntext="EDIT"
                        fontFamily={selectedFont}
                      />
                    </View>
                  ))}
                </View>
              </View>
            )}

            {activeTab === "Posts" && (
              <View>
                <Text
                  className="text-lg  mb-2"
                  style={{ fontFamily: selectedFont }}
                >
                  Post Section
                </Text>
                {post.map((item) => (
                  <ProfilePost
                    key={item.id}
                    profileImage={
                      profileImageUri
                        ? { uri: profileImageUri }
                        : defaultProfileImage
                    }
                    name={item.name}
                    time={item.subText}
                    caption="Lorem Ipsum is simply dummy text printing and typesetting. Lorem Ipsum is simply dummy text printing  Lorem Ipsum is simply dummy text printing "
                    postImage={postImage}
                    showMenu={true}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
