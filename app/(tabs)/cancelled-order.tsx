import OrderComponent from '@/components/order-component';
import ProfileHeader from '@/components/profile-header';
import Wrapper from '@/components/wrapper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Cancelled'); 

  return (
    <ScrollView 
      className="bg-white flex-1" 
      bounces={false}
      contentContainerStyle={{paddingBottom: 20}}
    >
      <Wrapper
        showFilterButton={true}
        showMenuButton={true}
      >
        <ProfileHeader/>
        <View className="p-4" style={{ width: "100%" }}>
                  <View className="mt-4 relative">
                    <TextInput
                      className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
                      placeholder="Search"
                      placeholderTextColor="#8391A1"
                    />
                    <View className="absolute left-4 top-4">
                      <Ionicons name="search" size={18} color="#8391A1" />
                    </View>
                  </View>
                </View>
        
        
        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {['Active', 'Completed', 'Cancelled'].map((status, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => {
            setActiveTab(status);
            if (status === 'Active') router.push('/buyer-orders');
            if (status === 'Completed') router.push('/completed-order');
            if (status === 'Cancelled') router.push('/cancelled-order');
              }}
              className="flex-1 items-center"
            >
              <View className="flex items-center">
            <Text
              className={`font-bold text-xl ${
                activeTab === status ? 'text-teal-600 border-b-2 border-teal-600 p-1' : 'text-black'
              }`}
            >
              {status}
            </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="p-4">
         <OrderComponent 
            source={require('../../assets/images/chicken1.jpg')}
            name='Poultry Name'
            subText='Corp Prodution'
            price={200}
            buttonText='RE-ORDER'
            onPress={() => router.push('/home-screen')}
            />
         <OrderComponent 
            source={require('../../assets/images/chicken1.jpg')}
            name='Poultry Name'
            subText='Corp Prodution'
            price={200}
            buttonText='RE-ORDER'
            onPress={() => router.push('/home-screen')}
            />
         <OrderComponent 
            source={require('../../assets/images/chicken1.jpg')}
            name='Poultry Name'
            subText='Corp Prodution'
            price={200}
            buttonText='RE-ORDER'
            onPress={() => router.push('/home-screen')}
            />
         <OrderComponent 
            source={require('../../assets/images/chicken1.jpg')}
            name='Poultry Name'
            subText='Corp Prodution'
            price={200}
            buttonText='RE-ORDER'
            onPress={() => router.push('/home-screen')}
            />
         <OrderComponent 
            source={require('../../assets/images/chicken1.jpg')}
            name='Poultry Name'
            subText='Corp Prodution'
            price={200}
            buttonText='RE-ORDER'
            onPress={() => router.push('/home-screen')}
         />
        </View>
      </Wrapper>
    </ScrollView>
  );
};