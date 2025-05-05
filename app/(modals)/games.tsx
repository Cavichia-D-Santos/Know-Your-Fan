import React from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/header';
import { images } from '@/constants/images'; // Certifique-se que essas imagens estão declaradas aqui

const games = [
  { id: 'cs2', name: 'CS2', image: images.cs2_hb },
  { id: 'valorant', name: 'Valorant', image: images.valorant_hb },
  { id: 'rocketleague', name: 'Rocket League', image: images.rl_hb },
  // Adicione mais jogos conforme desejar
];

const Games = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-primary px-4">
      <Header />
      <TouchableOpacity className='pt-24 pb-0' onPress={() => router.back()}>
        <Text className="text-white text-base">← Voltar</Text>
      </TouchableOpacity>
      <View className="pt- pb-4">
        <Text className="text-white text-2xl font-bold">Jogos</Text>
      </View>

      <View className="space-y-4 pb-10">
        {games.map((game) => (
          <TouchableOpacity
            key={game.id}
            className="rounded-xl overflow-hidden h-40"
            onPress={() => router.push(`/games/${game.id}`)}
          >
            <ImageBackground
              source={game.image}
              resizeMode="cover"
              className="flex-1 justify-end"
            >
              <View className="bg-black bg-opacity-60 p-3">
                <Text className="text-white text-xl font-semibold">{game.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Games;