import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Picker } from "@react-native-picker/picker";

import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useMerriweather,
  Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";
import {
  useFonts as useUbuntu,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";
import {
  useFonts as useOpenSans,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import {
  useFonts as useOxygen,
  Oxygen_400Regular,
} from "@expo-google-fonts/oxygen";

export default function EditProfile() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState("System");
  const [selectedCategory, setSelectedCategory] = useState("Livestock");

  const [fontsLoadedInter] = useInter({ Inter_400Regular });
  const [fontsLoadedPoppins] = usePoppins({ Poppins_400Regular });
  const [fontsLoadedRaleway] = useRaleway({ Raleway_400Regular });
  const [fontsLoadedRoboto] = useRoboto({ Roboto_400Regular });
  const [fontsLoadedLato] = useLato({ Lato_400Regular });
  const [fontsLoadedOswald] = useOswald({ Oswald_400Regular });
  const [fontsLoadedMerriweather] = useMerriweather({
    Merriweather_400Regular,
  });
  const [fontsLoadedUbuntu] = useUbuntu({ Ubuntu_400Regular });
  const [fontsLoadedOpenSans] = useOpenSans({ OpenSans_400Regular });
  const [fontsLoadedOxygen] = useOxygen({ Oxygen_400Regular });

  const allFontsLoaded =
    fontsLoadedInter &&
    fontsLoadedPoppins &&
    fontsLoadedRaleway &&
    fontsLoadedRoboto &&
    fontsLoadedLato &&
    fontsLoadedOswald &&
    fontsLoadedMerriweather &&
    fontsLoadedUbuntu &&
    fontsLoadedOpenSans &&
    fontsLoadedOxygen;

  useEffect(() => {
    const loadData = async () => {
      const storedProfile = await AsyncStorage.getItem("profileImage");
      const storedBanner = await AsyncStorage.getItem("bannerImage");
      const storedFont = await AsyncStorage.getItem("preferredFont");
      const storedCategory = await AsyncStorage.getItem("preferredCategory");
      if (storedProfile) setImage(storedProfile);
      if (storedBanner) setBanner(storedBanner);
      if (storedFont) setFontFamily(storedFont);
      if (storedCategory) setSelectedCategory(storedCategory);
    };
    loadData();
  }, []);

  const categoryOptions = [
    "Livestock",
    "Poultry",
    "Other Animals",
    "Homegrown Produce",
    "Eggs and Dairy",
    "Homemade Canned or Baked Goods",
    "Handmade Products",
    "Agricultural Equipment and Supplies",
  ];

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
    await AsyncStorage.setItem("preferredCategory", category);
  };

  // Permission check helper
  const askPermission = async (type: "camera" | "mediaLibrary") => {
    if (type === "camera") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Camera permission is required!");
        return false;
      }
      return true;
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Media Library permission is required!"
        );
        return false;
      }
      return true;
    }
  };

  // Profile Image picker with Camera/Gallery choice
  const pickImage = async () => {
    Alert.alert(
      "Select Image",
      "Choose where to pick your profile image from:",
      [
        {
          text: "Camera",
          onPress: async () => {
            const hasPermission = await askPermission("camera");
            if (!hasPermission) return;
            const result = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
            if (!result.canceled) {
              const uri = result.assets[0].uri;
              setImage(uri);
              await AsyncStorage.setItem("profileImage", uri);
            }
          },
        },
        {
          text: "Gallery",
          onPress: async () => {
            const hasPermission = await askPermission("mediaLibrary");
            if (!hasPermission) return;
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
            if (!result.canceled) {
              const uri = result.assets[0].uri;
              setImage(uri);
              await AsyncStorage.setItem("profileImage", uri);
            }
          },
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  // Banner Image picker with Camera/Gallery choice
  const changeBanner = async () => {
    Alert.alert(
      "Select Image",
      "Choose where to pick your banner image from:",
      [
        {
          text: "Camera",
          onPress: async () => {
            const hasPermission = await askPermission("camera");
            if (!hasPermission) return;
            const result = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [4, 2],
              quality: 1,
            });
            if (!result.canceled) {
              const uri = result.assets[0].uri;
              setBanner(uri);
              await AsyncStorage.setItem("bannerImage", uri);
            }
          },
        },
        {
          text: "Gallery",
          onPress: async () => {
            const hasPermission = await askPermission("mediaLibrary");
            if (!hasPermission) return;
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 2],
              quality: 1,
            });
            if (!result.canceled) {
              const uri = result.assets[0].uri;
              setBanner(uri);
              await AsyncStorage.setItem("bannerImage", uri);
            }
          },
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  const handleFontChange = async (selectedFont: string) => {
    setFontFamily(selectedFont);
    await AsyncStorage.setItem("preferredFont", selectedFont);
  };

  if (!allFontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#008080" />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FDFDFD" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageBackgroundContainer}>
        <ImageBackground
          source={
            banner
              ? { uri: banner }
              : require("../../assets/images/profilebg.png")
          }
          style={styles.imageBackground}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeBanner} style={styles.bannerCamera}>
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.avatarWrapper}>
          <Image
            source={
              image
                ? { uri: image }
                : require("../../assets/images/profile.png")
            }
            style={styles.avatar}
          />
          <TouchableOpacity onPress={pickImage} style={styles.profileCamera}>
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={[styles.title, { fontFamily }]}>Try Temp</Text>
        <Text style={[styles.subtitle, { fontFamily }]}>Edit Profile</Text>

        <Text style={[styles.label, { fontFamily }]}>Full Name</Text>
        <TextInput
          style={[styles.input, { fontFamily }]}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Try Temp"
          placeholderTextColor="#A0AEC0"
        />

        <Text style={[styles.label, { fontFamily }]}>E-mail</Text>
        <TextInput
          style={[styles.input, { fontFamily }]}
          value={email}
          onChangeText={setEmail}
          placeholder="trytemp@gmail.com"
          placeholderTextColor="#A0AEC0"
          keyboardType="email-address"
        />

        <Text style={[styles.label, { fontFamily }]}>Phone Number</Text>
        <TextInput
          style={[styles.input, { fontFamily }]}
          value={phone}
          onChangeText={setPhone}
          placeholder="+92 321 1234567"
          placeholderTextColor="#A0AEC0"
          keyboardType="phone-pad"
        />

        <Text style={[styles.label, { fontFamily }]}>Font Family</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={fontFamily}
            onValueChange={handleFontChange}
            style={{ fontFamily }}
          >
            <Picker.Item label="Inter" value="Inter_400Regular" />
            <Picker.Item label="Poppins" value="Poppins_400Regular" />
            <Picker.Item label="Raleway" value="Raleway_400Regular" />
            <Picker.Item label="Roboto" value="Roboto_400Regular" />
            <Picker.Item label="Lato" value="Lato_400Regular" />
            <Picker.Item label="Oswald" value="Oswald_400Regular" />
            <Picker.Item label="Merriweather" value="Merriweather_400Regular" />
            <Picker.Item label="Ubuntu" value="Ubuntu_400Regular" />
            <Picker.Item label="Open Sans" value="OpenSans_400Regular" />
            <Picker.Item label="Oxygen" value="Oxygen_400Regular" />
          </Picker>
        </View>

        <Text style={[styles.label, { fontFamily }]}>Category</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={handleCategoryChange}
            style={{ fontFamily }}
          >
            {categoryOptions.map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.saveButton}
        >
          <Text style={[styles.saveButtonText, { fontFamily }]}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    position: "relative",
    height: 210,
    backgroundColor: "white",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backButton: {
    marginLeft: 15,
    marginTop: 15,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#FFFFFFDD",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerCamera: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: "#008080",
    padding: 6,
    borderRadius: 20,
  },
  avatarWrapper: {
    position: "absolute",
    bottom: -50,
    // left: 20,
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
  },
  profileCamera: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#008080",
    padding: 6,
    borderRadius: 20,
  },
  form: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: "#A0AEC0",
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "#333",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 8,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#008080",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
