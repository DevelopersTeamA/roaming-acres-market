import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import TabBar from "@/components/main-tab-bar";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="/" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="login" />
        <Stack.Screen name="resetpassword" />
        <Stack.Screen name="verificationcode" />
        <Stack.Screen name="verifycode" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="seller" />
      </Stack>
     
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
