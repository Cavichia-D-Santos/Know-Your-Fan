import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/header';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import quests from '@/assets/data/quests.json';

const Missions = () => {
  return (
    <ScrollView className="flex-1 bg-primary">
      <Header />
      <View className="pt-20" />

      <View className="bg-secondary p-4 mb-6 items-center">
        <Text className="text-white text-2xl font-bold">Missões</Text>
        <Text className="text-light-100 mt-1 text-center">Complete desafios, suba de nível e ganhe recompensas exclusivas!</Text>
      </View>

      {quests.map((quest) => (
        <View key={quest.id} className="bg-secondary p-4 mb-4">
          <Text className="text-white text-xl font-bold">{quest.title}</Text>
          <Text className="text-light-100 mt-1">{quest.description}</Text>
          
          <View className="flex-row items-center justify-between mt-3">
            <View className="flex-row items-center">
              <Image source={icons.star} className="w-5 h-5 mr-1" tintColor='#f0f0f0'/>
              <Text className="text-yellow-400">{quest.reward}</Text>
            </View>
            {quest.completed ? (
              <Text className="text-green-400 font-semibold">Concluída</Text>
            ) : (
              <TouchableOpacity className="bg-yellow-400 px-4 py-2 rounded">
                <Text className="text-black font-bold">Iniciar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Missions;