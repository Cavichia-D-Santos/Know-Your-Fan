import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import leaderboard from '@/assets/data/leaderboard.json';
import user from "@/assets/data/user.json";
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import Header from '@/components/header';

const Leaderboard = () => {
  const router = useRouter();
  const { username, rank } = user;

  const user1 = leaderboard.find((u) => u.id === 1);
  const user2 = leaderboard.find((u) => u.id === 2);
  const user3 = leaderboard.find((u) => u.id === 3);

  return (
    <ScrollView className="flex-1 bg-primary">
      <Header />
      <View className="pt-20"/>
      <View className="bg-secondary p-4 rounded-lg items-center">
        <Text className="text-white text-2xl font-bold">Placar de Líderes</Text>
      </View>

      <View className="mt-6 bg-secondary p-4 rounded-lg m-3 mb-0">
        <Text className="text-white text-lg font-semibold">Sua posição</Text>
        <View className="flex-row items-center mt-4">
          <Text className="text-white text-xl">#{rank}</Text>
          <Image source={images.userImg} className="w-10 h-10 rounded-full ml-2" />
          <Text className="text-white text-lg ml-2">@{username}</Text>
          <Image source={images.badge_unverified} className="w-5 h-5 ml-1" />
        </View>
      </View>

      <View className="mt-6">
        <Text className="text-white text-lg font-semibold">Ranking</Text>
      </View>

      {user1 && (
        <View className="flex-row bg-secondary p-4 items-center mt-4 rounded-lg m-3 mb-0">
          <Text className="text-white text-xl">#{user1.position}</Text>
          <Image source={icons.user} className="w-10 h-10 rounded-full ml-2" />
          <Text className="text-white text-lg ml-2">@{user1.username}</Text>
          <Image source={icons.lvl35} className="w-5 h-5 ml-5" />
        </View>
      )}

      {user2 && (
        <View className="flex-row bg-secondary p-4 items-center mt-4 rounded-lg m-3 mb-0">
          <Text className="text-white text-xl">#{user2.position}</Text>
          <Image source={icons.user} className="w-10 h-10 rounded-full ml-2" />
          <Text className="text-white text-lg ml-2">@{user2.username}</Text>
          <Image source={icons.lvl31} className="w-5 h-5 ml-5" />
        </View>
      )}

      {user3 && (
        <View className="flex-row bg-secondary p-4 items-center mt-4 rounded-lg m-3 mb-0">
          <Text className="text-white text-xl">#{user3.position}</Text>
          <Image source={icons.user} className="w-10 h-10 rounded-full ml-2" />
          <Text className="text-white text-lg ml-2">@{user3.username}</Text>
          <Image source={icons.lvl2} className="w-5 h-5 ml-5"/>
        </View>
      )}
    </ScrollView>
  );
};

export default Leaderboard;