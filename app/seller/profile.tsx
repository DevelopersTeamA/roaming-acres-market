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
import DropDownPicker from "react-native-dropdown-picker";

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

  // Fixed colors regardless of system theme
  const bgColor = "white";
  const textColor = "black";
  const borderColor = "#CBD5E0";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState("System");
  const [selectedCategory, setSelectedCategory] = useState("Livestock");

  const [openCategory, setOpenCategory] = useState(false);
  const [categoryItems, setCategoryItems] = useState([
    { label: "Livestock", value: "Livestock" },
    { label: "Poultry", value: "Poultry" },
    { label: "Other Animals", value: "Other Animals" },
    { label: "Homegrown Produce", value: "Homegrown Produce" },
    { label: "Eggs and Dairy", value: "Eggs and Dairy" },
    {
      label: "Homemade Canned or Baked Goods",
      value: "Homemade Canned or Baked Goods",
    },
    { label: "Handmade Products", value: "Handmade Products" },
    {
      label: "Agricultural Equipment and Supplies",
      value: "Agricultural Equipment and Supplies",
    },
  ]);

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

  const [openFont, setOpenFont] = useState(false);
  const [fontItems, setFontItems] = useState([
    { label: "Inter", value: "Inter_400Regular" },
    { label: "Poppins", value: "Poppins_400Regular" },
    { label: "Raleway", value: "Raleway_400Regular" },
    { label: "Roboto", value: "Roboto_400Regular" },
    { label: "Lato", value: "Lato_400Regular" },
    { label: "Oswald", value: "Oswald_400Regular" },
    { label: "Merriweather", value: "Merriweather_400Regular" },
    { label: "Ubuntu", value: "Ubuntu_400Regular" },
    { label: "Open Sans", value: "OpenSans_400Regular" },
    { label: "Oxygen", value: "Oxygen_400Regular" },
  ]);

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
      const storeName = await AsyncStorage.getItem("name");
      if (storedProfile) setImage(storedProfile);
      if (storedBanner) setBanner(storedBanner);
      if (storedFont) setFontFamily(storedFont);
      if (storedCategory) setSelectedCategory(storedCategory);
      if (storeName) setFullName(storeName);
    };
    loadData();
  }, []);

  const askPermission = async (type: string) => {
    const { status } =
      type === "camera"
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        `${type === "camera" ? "Camera" : "Media"} permission is required!`
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    Alert.alert(
      "Select Image",
      "Choose where to pick your profile image from:",
      [
        {
          text: "Camera",
          onPress: async () => {
            if (!(await askPermission("camera"))) return;
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
            if (!(await askPermission("mediaLibrary"))) return;
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

  const changeBanner = async () => {
    Alert.alert(
      "Select Image",
      "Choose where to pick your banner image from:",
      [
        {
          text: "Camera",
          onPress: async () => {
            if (!(await askPermission("camera"))) return;
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
            if (!(await askPermission("mediaLibrary"))) return;
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

  const handleFontChange = async (selectedFont : string) => {
    setFontFamily(selectedFont);
    await AsyncStorage.setItem("preferredFont", selectedFont);
  };

  const handleStoreName = async (name : string) => {
    setFullName(name);
    await AsyncStorage.setItem("name", name);
  };

  if (!allFontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#008080" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 30 }}
        nestedScrollEnabled={true}
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

        <View style={[styles.form, { backgroundColor: bgColor }]}>
          <Text style={[styles.title, { fontFamily, color: textColor }]}>
            {fullName || "Your Name"}
          </Text>
          <Text style={[styles.subtitle, { fontFamily, color: textColor }]}>
            Edit Profile
          </Text>
          <Text style={[styles.label, { fontFamily, color: textColor }]}>
            Full Name
          </Text>
          <TextInput
            style={[styles.input, { fontFamily, color: textColor, borderColor }]}
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              AsyncStorage.setItem("name", text);
            }}
            placeholder="Try Temp"
            placeholderTextColor="#A0AEC0"
          />

          <Text style={[styles.label, { fontFamily, color: textColor }]}>
            E-mail
          </Text>
          <TextInput
            style={[styles.input, { fontFamily, color: textColor, borderColor }]}
            value={email}
            onChangeText={setEmail}
            placeholder="trytemp@gmail.com"
            placeholderTextColor="#A0AEC0"
            keyboardType="email-address"
          />

          <Text style={[styles.label, { fontFamily, color: textColor }]}>
            Phone Number
          </Text>
          <TextInput
            style={[styles.input, { fontFamily, color: textColor, borderColor }]}
            value={phone}
            onChangeText={setPhone}
            placeholder="+1 (000) 123-4567"
            placeholderTextColor="#A0AEC0"
            keyboardType="phone-pad"
          />

          <Text style={[styles.label, { fontFamily, color: textColor }]}>
            Font Style
          </Text>
          <DropDownPicker
            open={openFont}
            setOpen={setOpenFont}
            items={fontItems}
            setItems={setFontItems}
            value={fontFamily}
            setValue={(cb) => {
              const val = cb(fontFamily);
              setFontFamily(val);
              AsyncStorage.setItem("preferredFont", val);
              return val;
            }}
            style={[styles.dropdown, { borderColor }]}
            textStyle={[styles.dropdownText, { fontFamily, color: textColor }]}
            dropDownContainerStyle={[
              styles.dropdownContainer,
              { borderColor, backgroundColor: bgColor },
            ]}
            listItemContainerStyle={styles.listItemContainer}
            listItemLabelStyle={{ fontFamily, color: textColor }}
            selectedItemContainerStyle={styles.selectedItem}
            selectedItemLabelStyle={{ color: "#008080", fontWeight: "bold" }}
            arrowIconStyle={styles.arrowIcon as any}
            tickIconStyle={styles.tickIcon as any}
            zIndex={3000}
            listMode="MODAL"
            modalProps={{
              animationType: "slide",
            }}
            modalContentContainerStyle={{
              backgroundColor: bgColor,
              padding: 20,
              borderRadius: 10,
            }}
            placeholder="Select a font"
            placeholderStyle={{ color: "#A0AEC0" }}
            activityIndicatorColor="#008080"
            closeAfterSelecting={true}
          />

          <Text style={[styles.label, { fontFamily, color: textColor }]}>
            Category
          </Text>
          <DropDownPicker
            open={openCategory}
            setOpen={setOpenCategory}
            items={categoryItems}
            setItems={setCategoryItems}
            value={selectedCategory}
            setValue={setSelectedCategory}
            onChangeValue={(val) => {
              if (val !== null) {
                AsyncStorage.setItem("preferredCategory", val);
              }
            }}
            style={[styles.dropdown, { borderColor }]}
            textStyle={[styles.dropdownText, { fontFamily, color: textColor }]}
            dropDownContainerStyle={[
              styles.dropdownContainer,
              { borderColor, backgroundColor: bgColor },
            ]}
            listItemContainerStyle={styles.listItemContainer}
            listItemLabelStyle={{ fontFamily, color: textColor }}
            selectedItemContainerStyle={styles.selectedItem}
            selectedItemLabelStyle={{ color: "#008080", fontWeight: "bold" }}
            arrowIconStyle={styles.arrowIcon as any}
            tickIconStyle={styles.tickIcon as any}
            zIndex={2000}
            listMode="MODAL"
            modalProps={{
              animationType: "slide",
            }}
            modalContentContainerStyle={{
              backgroundColor: bgColor,
              padding: 20,
              borderRadius: 10,
            }}
            placeholder="Select a category"
            placeholderStyle={{ color: "#A0AEC0" }}
            activityIndicatorColor="#008080"
            closeAfterSelecting={true}
          />

          <TouchableOpacity
            onPress={() => router.push("/seller/profile-seller")}
            style={styles.saveButton}
          >
            <Text style={[styles.saveButtonText, { fontFamily }]}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
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
    alignSelf: "center",
    width: 100,
    height: 100,
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
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderRadius: 8,
  },
  listItemContainer: {
    borderBottomWidth: 0,
  },
  selectedItem: {
    backgroundColor: "#E6FFFA",
  },
  arrowIcon: {
    tintColor: "#008080",
  },
  tickIcon: {
    tintColor: "#008080",
  },
  saveButton: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
