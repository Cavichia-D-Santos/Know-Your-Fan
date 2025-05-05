import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '@/components/header';
import games from '@/assets/data/games.json';
import { images } from '@/constants/images';

const GameDetail = () => {
  const { gameId } = useLocalSearchParams();
  const game = games[gameId as string];

  if (!game) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Text className="text-white text-lg">Jogo não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-primary">
      <Header />
      
      {/* Banner do Jogo */}
      <ImageBackground
        source={images[game.banner]} // Garantir que a imagem seja carregada de assets/images
        className="w-full h-40 justify-end"
        resizeMode="cover"
      >
        <View className="bg-black bg-opacity-60 p-4">
          <Text className="text-white text-2xl font-bold">{game.title}</Text>
        </View>
      </ImageBackground>

      {/* Lineup da FURIA */}
      <View className="p-4">
        <Text className="text-white text-lg font-semibold mb-2">Lineup da FURIA</Text>
        <ScrollView horizontal className="space-x-4">
          {game.lineup.map((player) => (
            <View key={player.name} className="items-center">
              <Image
                source={images[player.image]} // Garantir que o nome da imagem esteja correto no arquivo images.ts
                className="w-20 h-20 rounded-full"
              />
              <Text className="text-white mt-2 text-sm">{player.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Últimas Partidas */}
      <View className="p-4">
        <Text className="text-white text-lg font-semibold mb-2">Últimas Partidas</Text>
        {game.matches.map((match, index) => (
          <View key={index} className="bg-secondary p-3 rounded-lg mb-2">
            <Text className="text-white text-base">
              Contra {match.opponent} – {match.result} ({match.score})
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default GameDetail;
