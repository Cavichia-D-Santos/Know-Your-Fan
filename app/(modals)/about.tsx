import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '@/components/header';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';

const About = () => {
    const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-primary">
      <Header/>
      <TouchableOpacity className='pt-24 pb-0 pl-5' onPress={() => router.back()}>
            <Text className="text-white text-base">← Voltar</Text>
      </TouchableOpacity>

      <View className="p-4">
        <Text className="text-white text-2xl font-bold mb-2">Sobre a FURIA</Text>
        <Text className="text-white text-base mb-4">        Fundada em 2017 em Uberlândia, Minas Gerais, a FURIA Esports é uma organização brasileira de esportes eletrônicos que atua em diversas modalidades, incluindo Counter-Strike 2, Valorant, Rocket League, League of Legends, Rainbow Six Siege, Apex Legends e Futebol 7. :contentReference
        </Text>
        <Text className="text-white text-base mb-4">        A organização foi idealizada por Jaime Pádua, André Akkari e Cris Guedes, com o objetivo de representar o Brasil no cenário competitivo internacional.
        </Text>
        <Text className="text-white text-base mb-4">        Em 2020 e 2021, a FURIA foi eleita a melhor organização de esportes eletrônicos no Prêmio eSports Brasil. :contentReference
        </Text>
      </View>

      <View className="p-4">
        <Text className="text-white text-xl font-semibold mb-2">Fundadores</Text>
        <View className="flex-row flex-wrap justify-between">

          <View className="w-1/2 p-2">
            <Image
              source={images.jaime}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-white text-center mt-2">Jaime Pádua</Text>
          </View>

          <View className="w-1/2 p-2">
            <Image
              source={images.akkari}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-white text-center mt-2">André Akkari</Text>
          </View>

          <View className="w-1/2 p-2">
            <Image
              source={images.cristian}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-white text-center mt-2">Cristian Guedes</Text>
          </View>

          <View className="w-1/2 p-2">
            <Image
              source={images.nicholas}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-white text-center mt-2">Nicholas Nogueira</Text>
          </View>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-white text-xl font-semibold mb-2">Contato</Text>
        <Text className="text-white text-base mb-2">Website: https://www.furia.gg/</Text>
        <Text className="text-white text-base mb-2">Instagram: @furiagg</Text>
      </View>
    </ScrollView>
  );
};

export default About;