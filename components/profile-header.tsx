import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileHeaderProps {
  route?: string;
  account?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  route,
  account = "Buyer",
}) => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const imageUri = await AsyncStorage.getItem("profileImage");
        if (imageUri) {
          setProfileImage(imageUri);
        }
      } catch (error) {
        console.error("Error loading profile image from AsyncStorage", error);
      }
    };
    loadProfileImage();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push((route || "/(tabs)/buyer-account") as any)}
      >
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../assets/images/profile.png")
          }
          style={styles.img}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          marginLeft: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Try Temp</Text>
        <Text style={{ fontSize: 14 }}>{account} Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingVertical: 18,
    alignSelf: "center",
    position: "absolute",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 7,
    borderColor: "#ffffff",
  },
});

export default ProfileHeader;
