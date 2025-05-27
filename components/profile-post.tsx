import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

interface PostProps {
  profileImage: any; // require or uri
  name: string;
  time: string;
  caption?: string;
  postImage: any; // require or uri
  showMenu?: boolean;
}

const ProfilePost = ({
  profileImage,
  name,
  time,
  caption,
  postImage,
  showMenu = false,
}: PostProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [fontFamily, setFontFamily] = useState("System");

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const loadFont = async () => {
      try {
        const storedFont = await AsyncStorage.getItem("preferredFont");
        if (storedFont) {
          setFontFamily(storedFont);
        }
      } catch (error) {
        console.error("Failed to load preferred font:", error);
      }
    };

    loadFont();
  }, []);

  return (
    <View className="bg-white p-4 rounded-xl mb-4">
      {/* Header */}
      <View className="flex-row items-center mb-3 relative">
        <Image
          source={profileImage}
          className="w-10 h-10 rounded-full mr-3"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-base font-semibold" style={{ fontFamily }}>
            {name}
          </Text>
          <Text className="text-xs text-gray-500" style={{ fontFamily }}>
            {time}
          </Text>
        </View>

        {/* Show menu icon only if showMenu prop is true */}
        {showMenu && (
          <TouchableOpacity onPress={toggleMenu}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        )}

        {/* Custom Dropdown */}
        {showMenu && menuVisible && (
          <View style={styles.dropdownMenu}>
            <Pressable onPress={() => console.log("Edit pressed")}>
              <View style={[styles.menuItem, styles.activeItem]}>
                <Text style={[styles.activeText, { fontFamily }]}>Edit</Text>
              </View>
            </Pressable>
            <View style={styles.menuItem}>
              <Text style={[styles.disabledText, { fontFamily }]}>Share</Text>
            </View>
          </View>
        )}
      </View>

      {/* Caption */}
      {caption ? (
        <Text className="text-sm text-gray-800 mb-3" style={{ fontFamily }}>
          {caption}
        </Text>
      ) : null}

      {/* Post Image */}
      <View className="rounded-xl overflow-hidden">
        <Image source={postImage} className="w-full h-64" resizeMode="cover" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownMenu: {
    position: "absolute",
    top: 35,
    right: 0,
    backgroundColor: "#eee",
    borderRadius: 4,
    overflow: "hidden",
    elevation: 3,
    zIndex: 999,
    width: 100,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  activeItem: {
    backgroundColor: "#008080",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  disabledText: {
    color: "#999",
    textAlign: "center",
  },
});

export default ProfilePost;
