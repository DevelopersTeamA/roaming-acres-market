import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import Wrapper from "@/components/wrapper";
import CustomTextInput from "../../components/custom-input";
import Dropdown from "@/components/dropdown-component";

// Define a type for your form data
type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  businessName: string;
  contactNumber: string;
  postalCode: string;
  email: string;
  address: string;
  city: string;
  state: string;
  type: string;
  nature: string;
};

const BusinessRegistrationScreen: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dob: "",
    businessName: "",
    contactNumber: "",
    postalCode: "",
    email: "",
    address: "",
    city: "",
    state: "",
    type: "Business",
    nature: "",
  });
  const businessTypes = [
    "Sole Proprietorship",
    "Partnership",
  ];

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    router.push("/seller/verify-code");
    // Add validation & submit logic here
  };

  return (
    <>
      <ScrollView
        className="bg-white"
        bounces={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 100 : 80,
        }}
      >
        <Wrapper showBackButton>
          <View className="px-3">
            <Text className="text-[28px] font-bold pt-10 text-center">
              Register Your Business
            </Text>
            <Text className="text-[14px] pb-10 pt-5 text-center">
              Please provide all required details to register your business with us
            </Text>

            <View>
              <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
                Business Owner*
              </Text>
              <View className="flex-row justify-between gap-6">
                <View className="flex-1">
                  <CustomTextInput
                    value={formData.firstName}
                    onChangeText={(text: string) => handleChange("firstName", text)}
                    placeholder="First Name"

                  />
                </View>
                <View className="flex-1">
                  <CustomTextInput
                    value={formData.lastName}
                    onChangeText={(text: string) => handleChange("lastName", text)}
                    placeholder="Last Name"
                  />
                </View>
              </View>
            </View>

            <CustomTextInput
              label="Date of Birth"
              value={formData.dob}
              onChangeText={(text: string) => handleChange("dob", text)}
              placeholder="DD/MM/YYYY"
              keyboardType="numbers-and-punctuation"
            />

            <CustomTextInput
              label="Business Name*"
              value={formData.businessName}
              onChangeText={(text: string) => handleChange("businessName", text)}
            />

            <View className="flex-row justify-between gap-6">
              <View className="flex-1">
                <CustomTextInput
                  label="Contact Number"
                  value={formData.contactNumber}
                  onChangeText={(text: string) => handleChange("contactNumber", text)}
                  keyboardType="phone-pad"
                />
              </View>

              <View className="flex-1">
                <CustomTextInput
                  label="Postal / Zip Code"
                  value={formData.postalCode}
                  onChangeText={(text: string) => handleChange("postalCode", text)}
                />
              </View>
            </View>

            <CustomTextInput
              label="E-mail*"
              value={formData.email}
              onChangeText={(text: string) => handleChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomTextInput
              label="Address*"
              value={formData.address}
              onChangeText={(text: string) => handleChange("address", text)}
            />

            <View className="flex-row justify-between gap-6">
              <View className="flex-1">
                <CustomTextInput
                  label="City"
                  value={formData.city}
                  onChangeText={(text: string) => handleChange("city", text)}
                />
              </View>

              <View className="flex-1">
                <CustomTextInput
                  label="State / Province"
                  value={formData.state}
                  onChangeText={(text: string) => handleChange("state", text)}
                />
              </View>
            </View>

            <Dropdown
              label="Type of Business*"
              options={businessTypes}
              selectedValue={formData.type}
              onValueChange={(value: string) => handleChange("type", value)}
            />

            <CustomTextInput
              label="Business Nature*"
              value={formData.nature}
              onChangeText={(text: string) => handleChange("nature", text)}
            />

            <TouchableOpacity
              className="w-full py-4 mt-6 rounded bg-[#008080] items-center"
              onPress={handleSubmit}
            >
              <Text className="text-white text-lg font-semibold uppercase">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
};

export default BusinessRegistrationScreen;