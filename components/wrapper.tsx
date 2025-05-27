import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import Button from "./button";

type ModalState = "filter" | "period" | null;

const Wrapper: React.FC<{
  children?: React.ReactNode;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  showFilterButton?: boolean;
  showPeriodButton?: boolean;
  menuLink?: string;
  className?: string;
}> = ({
  children,
  showBackButton = false,
  showMenuButton = false,
  showFilterButton = false,
  showPeriodButton = false,
  menuLink = "/(tabs)/buyer-account",
  className = "",
}) => {
  const router = useRouter();
  const [modalState, setModalState] = useState<ModalState>(null);

  // Filter modal states
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedSales, setSelectedSales] = useState(["All"]);
  const [selectedLocations, setSelectedLocations] = useState(["All"]);

  // Period modal states
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [dateRange] = useState({
    start: "1 Jan 2025",
    end: "18 Jan 2025",
  });
  const [selectedStatuses, setSelectedStatuses] = useState(["Confirmed"]);

  const toggleFilter = (filterType: string, value: string) => {
    switch (filterType) {
      case "category":
        setSelectedCategories((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
      case "sale":
        setSelectedSales((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
      case "location":
        setSelectedLocations((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
    }
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const FilterModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalState === "filter"}
      onRequestClose={() => setModalState(null)}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-2xl max-h-[80%]">
          <View className="flex-row justify-between items-center p-5 border-b border-gray-200">
            <Text className="text-lg font-bold">Filters</Text>
            <TouchableOpacity onPress={() => setModalState(null)}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView className="px-5 pt-3">
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">Categories</Text>
              <View className="flex-row flex-wrap gap-2">
                {[
                  "All",
                  "Animals/Livestock",
                  "Dairy/Eggs/Produce",
                  "Handmade/Homemade Products",
                  "Equipment",
                ].map((item) => (
                  <TouchableOpacity
                    key={`category-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedCategories.includes(item)
                        ? "bg-teal-600"
                        : "bg-white"
                    }`}
                    onPress={() => {
                      toggleFilter("category", item);
                      setModalState(null);
                      router.push("/search");
                    }}
                  >
                    <Text
                      className={`text-sm ${
                        selectedCategories.includes(item)
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">On Sales</Text>
              <View className="flex-row flex-wrap gap-2">
                {[
                  "All",
                  "Hot Deal",
                  "Favorite Shop",
                  "Top Pick",
                  "E-Voucher",
                  "Deal $9",
                ].map((item) => (
                  <TouchableOpacity
                    key={`sale-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedSales.includes(item) ? "bg-teal-600" : "bg-white"
                    }`}
                    onPress={() => {
                      toggleFilter("sale", item);
                      setModalState(null);
                      router.push("/search");
                    }}
                  >
                    <Text
                      className={`text-sm ${
                        selectedSales.includes(item)
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">Locations</Text>
              <View className="flex-row flex-wrap gap-2">
                {[
                  "All",
                  "Americas",
                  "Asia",
                  "Australia",
                  "South Pole",
                  "Africa",
                ].map((item) => (
                  <TouchableOpacity
                    key={`location-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedLocations.includes(item)
                        ? "bg-teal-600"
                        : "bg-white"
                    }`}
                    onPress={() => {
                      toggleFilter("location", item);
                      setModalState(null);
                      router.push("/search");
                    }}
                  >
                    <Text
                      className={`text-sm ${
                        selectedLocations.includes(item)
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View className="p-5">
              <Button
                title="APPLY FILTER"
                state="primary"
                onPress={() => {
                  console.log("Selected Filters:", {
                    categories: selectedCategories,
                    sales: selectedSales,
                    locations: selectedLocations,
                  });
                  setModalState(null);
                  router.push("/search");
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  const PeriodModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalState === "period"}
      onRequestClose={() => setModalState(null)}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-2xl max-h-[80%]">
          <View className="flex-row justify-between items-center p-5 border-b border-gray-200">
            <Text className="text-lg font-bold">Select Period</Text>
            <TouchableOpacity onPress={() => setModalState(null)}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView className="px-5 pt-3">
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">Period</Text>
              <View className="flex-row flex-wrap gap-2">
                {["Today", "This week", "This month"].map((item) => (
                  <TouchableOpacity
                    key={`period-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedPeriod === item ? "bg-teal-600" : "bg-white"
                    }`}
                    onPress={() => setSelectedPeriod(item)}
                  >
                    <Text
                      className={`text-sm ${
                        selectedPeriod === item ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View className="flex-row flex-wrap gap-2 mt-2">
                {["Previous month", "This year"].map((item) => (
                  <TouchableOpacity
                    key={`period-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedPeriod === item ? "bg-teal-600" : "bg-white"
                    }`}
                    onPress={() => setSelectedPeriod(item)}
                  >
                    <Text
                      className={`text-sm ${
                        selectedPeriod === item ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">
                Select Period
              </Text>
              <View className="flex-row items-center justify-center gap-2">
                <Text className="text-sm text-teal-600 font-medium">
                  {dateRange.start}
                </Text>
                <Text className="text-sm text-gray-500">to</Text>
                <Text className="text-sm text-teal-600 font-medium">
                  {dateRange.end}
                </Text>
              </View>
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold mb-2">Status</Text>
              <View className="flex-row flex-wrap gap-2">
                {["Confirmed", "Pending", "Canceled"].map((item) => (
                  <TouchableOpacity
                    key={`status-${item}`}
                    className={`px-4 py-2 rounded-lg border border-teal-600 ${
                      selectedStatuses.includes(item)
                        ? "bg-teal-600"
                        : "bg-white"
                    }`}
                    onPress={() => {
                      toggleStatus(item);
                      setModalState(null);
                      router.push("/(tabs)/all-transactions");
                    }}
                  >
                    <Text
                      className={`text-sm ${
                        selectedStatuses.includes(item)
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View className="p-5">
              <Button
                title={`SHOW RESULTS (${3261})`}
                state="primary"
                onPress={() => {
                  console.log("Selected Period:", {
                    period: selectedPeriod,
                    dateRange,
                    statuses: selectedStatuses,
                  });
                  setModalState(null);
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <View className="flex-1 bg-white">
      {(showBackButton || showMenuButton) && (
        <TouchableOpacity
          onPress={() =>
            router[showBackButton ? "back" : "push"](
              showBackButton ? undefined : menuLink || "/(tabs)/buyer-account"
            )
          }
          className="absolute top-6 left-4 z-10"
        >
          <View className="w-9 h-9 bg-white rounded-xl mt-7 shadow-sm justify-center items-center">
            <Ionicons
              name={showBackButton ? "chevron-back-outline" : "menu"}
              size={16}
              color="#000"
            />
          </View>
        </TouchableOpacity>
      )}

      <View className="absolute top-6 right-4 z-10">
        {showFilterButton && (
          <TouchableOpacity
            onPress={() => setModalState("filter")}
            className="w-9 h-9 bg-white mt-7 shadow-sm  rounded-xl justify-center items-center"
          >
            <Ionicons name="options" size={16} color="#000" />
          </TouchableOpacity>
        )}
        {showPeriodButton && (
          <TouchableOpacity
            onPress={() => setModalState("period")}
            className="w-9 h-9 bg-white mt-7 shadow-sm  rounded-xl justify-center items-center"
          >
            <Ionicons name="options" size={16} color="#000" />
          </TouchableOpacity>
        )}
      </View>

      <Image
        className="w-full mt-[-5px]"
        source={require("../assets/images/wrapper-top.png")}
        resizeMode="cover"
      />

      {children}

      <FilterModal />
      <PeriodModal />
    </View>
  );
};

export default Wrapper;
