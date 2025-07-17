import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

type TabIcon = "home" | "heart" | "grid" | "cart" | "chatbubbles" | string;

interface MainTabBarProps {
  id1?: string;
  id2?: string;
  id3?: string;
  id4?: string;
  id5?: string;

  icon1?: TabIcon;
  icon2?: TabIcon;
  icon3?: TabIcon;
  icon4?: TabIcon;
  icon5?: TabIcon;

  label1?: string;
  label2?: string;
  label3?: string;
  label4?: string;
  label5?: string;

  route1?: string;
  route2?: string;
  route3?: string;
  route4?: string;
  route5?: string;

  params1?: object;
  params2?: object;
  params3?: object;
  params4?: object;
  params5?: object;
}

const MainTabBar = ({
  id1 = "1",
  id2 = "2",
  id3 = "3",
  id4 = "4",
  id5 = "5",
  icon1 = "home",
  icon2 = "heart",
  icon3 = "grid",
  icon4 = "cart",
  icon5 = "chatbubbles",
  label1 = "Home",
  label2 = "Wishlist",
  label3 = "Products",
  label4 = "My Orders",
  label5 = "Message",
  route1 = "/home-screen",
  route2 = "/wishlist",
  route3 = "/product-listing",
  route4 = "/buyer-orders",
  route5 = "/notifications",
  params1,
  params2,
  params3,
  params4,
  params5,
}: MainTabBarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { id: id1, icon: icon1, label: label1, route: route1, params: params1 },
    { id: id2, icon: icon2, label: label2, route: route2, params: params2 },
    { id: id3, icon: icon3, label: label3, route: route3, params: params3 },
    { id: id4, icon: icon4, label: label4, route: route4, params: params4 },
    { id: id5, icon: icon5, label: label5, route: route5, params: params5 },
  ];

  const handleTabPress = (route: string, params?: object) => {
    if (pathname !== route) {
      if (params) {
        router.push({ pathname: route, params });
      } else {
        router.push(route);
      }
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;

        return (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              isActive && {
                borderBottomWidth: 2,
                borderBottomColor: "#008080",
              },
            ]}
            onPress={() => handleTabPress(tab.route, tab.params)}
          >
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={isActive ? "#008080" : "#8391A1"}
            />
            <Text
              style={[
                styles.tabText,
                isActive && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tab: {
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: "#8391A1",
  },
  activeTabText: {
    color: "#008080",
    fontWeight: "600",
  },
});

export default MainTabBar;
