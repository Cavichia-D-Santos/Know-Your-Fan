import React, { useEffect } from 'react';
import { Image, View, Text, Button} from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/header';
import Carousel from '@/components/carousel';
import { images } from '@/constants/images';

const index = () => {
    const router = useRouter();

    return(
        <View className="flex-1 bg-primary pt-20">
            <Header/>
            <View className="w-full flex-row justify-between px-4 py-2 bg-yellow-400">
                <Button title="Home" onPress={() => router.push("/")}/>
                <Button title="Jogos" onPress={() => router.push("/games")}/>
                <Button title="Sobre" onPress={() => router.push("/about")}/>
            </View>
            
            <Carousel images={[images.c1_dc, images.c2_furia]}/>
            <View className="mt-6 px-4">
                <Text className="text-white text-xl font-bold mb-3">Notícias Recentes</Text>

                <View className="bg-secondary p-4 rounded-lg mb-3">
                    <Text className="text-white font-semibold">🔥 FURIA vence clássico contra MIBR</Text>
                    <Text className="text-white text-sm mt-1 text-gray-300">Em uma série emocionante, a FURIA levou a melhor no CS2 e segue forte no campeonato.</Text>
                </View>

                <View className="bg-secondary p-4 rounded-lg mb-3">
                    <Text className="text-white font-semibold">🎯 yuurih se destaca com MVP da semana</Text>
                    <Text className="text-white text-sm mt-1 text-gray-300">O jogador brilhou nas partidas recentes e garantiu estatísticas impressionantes.</Text>
                </View>

                <View className="bg-secondary p-4 rounded-lg">
                    <Text className="text-white font-semibold">🛡️ FURIA anuncia nova lineup para Valorant</Text>
                    <Text className="text-white text-sm mt-1 text-gray-300">Reforços chegam para fortalecer a equipe na próxima temporada do VCT.</Text>
                </View>
            </View>
        </View>
    )
}

export default index;