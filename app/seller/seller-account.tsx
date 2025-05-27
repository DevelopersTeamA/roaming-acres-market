import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";

export default function SellerAccount() {
  const router = useRouter();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] =
    useState(false);

  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <ProfileHeader account="Seller" route="/seller/seller-account" />

          <View style={{ paddingTop: 120 }}>
            <TouchableOpacity
              onPress={() => router.push("/seller/profile")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Profile
              </Text>
              <AntDesign
                name="caretright"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/seller/seller-orders")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Seller Dashboard
              </Text>
              <AntDesign
                name="caretright"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/notifications")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Notifications
              </Text>
              <Ionicons
                name="notifications"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(tabs)/notification-setting")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Setting
              </Text>
              <AntDesign
                name="caretright"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setLogoutModalVisible(true)}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Logout
              </Text>
              <MaterialIcons
                name="logout"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDeleteAccountModalVisible(true)}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Delete Account
              </Text>
              <MaterialIcons
                name="delete"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
          </View>
        </Wrapper>
      </ScrollView>

      {/* Logout Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg px-8 py-14 w-4/5">
            <Text className="text-[19px] font-bold mb-6 text-center">
              Are you sure you want to Log out?
            </Text>
            <Text className="text-gray-600 mb-12 text-center">
              This action cannot be undone. Are you sure you want to Log out?
            </Text>
            <View className="flex flex-row justify-center items-center">
              <Button
                state="primary"
                title="LOGOUT"
                onPress={() => router.push("/")}
              />
              <Button
                state="secondary"
                title="Cancel"
                onPress={() => setLogoutModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Account Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteAccountModalVisible}
        onRequestClose={() => setDeleteAccountModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg px-8 py-14 w-4/5">
            <Text className="text-[19px] font-bold mb-6 text-center">
              Are you sure you want to delete your account?
            </Text>
            <Text className="text-gray-600 mb-12 text-center">
              This action is permanent and cannot be undone. All your data will
              be lost.
            </Text>
            <View className="flex flex-row justify-center items-center space-x-4">
              <Button
                state="primary"
                title="DELETE"
                onPress={() => {
                  // Add delete logic here
                  setDeleteAccountModalVisible(false);
                  router.push("/");
                }}
              />
              <Button
                state="secondary"
                title="Cancel"
                onPress={() => setDeleteAccountModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
