import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import user from '@/assets/data/user.json';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const Perfil = () => {
    const router = useRouter();
    const {username, name, level, exp, nextLevelExp,joinDate, rank} = user;

    const progress = (exp / nextLevelExp) * 100;

    return (
        <ScrollView className="flex-1 bg-primary p-4">
            <TouchableOpacity className="absolute top-6 right-4 z-10" onPress={() => router.push('/configs')}>
                <Image source={icons.setting} className="w-6 h-6" tintColor='#F0f0f0' />
            </TouchableOpacity>
        <View className="items-center mt-6">
            <Image source={images.userImg} className="w-24 h-24 rounded-full" />
        <View className="flex-row items-center mt-2">
            <Text className="text-white text-xl font-bold mr-2">@{username}</Text>
            <TouchableOpacity onPress={() => router.push('/verification')}>
                <Image source={images.badge_unverified} className="w-5 h-5" />
            </TouchableOpacity>
        </View>
        <Text className="text-light-100 text-sm">{name}</Text>

        </View>


        <View className="mt-4 px-4">
            <Text className="text-white mb-1">Nível {level}</Text>
            <View className="h-3 bg-secondary rounded-full overflow-hidden">
            <View className="h-full bg-yellow-400" style={{ width: `${progress}%` }} />
            </View>
            <Text className="text-light-100 text-xs mt-1">
            {exp}/{nextLevelExp} XP para o próximo nível
            </Text>
        </View>

        <View className="mt-6 flex-row justify-around">
            <View className="items-center">
            <Text className="text-white text-sm">Furioso desde</Text>
            <Text className="text-yellow-400 text-base">{joinDate}</Text>
            </View>
            <View className="items-center">
            <Text className="text-white text-sm">Rank</Text>
            <Text className="text-yellow-400 text-base">#{rank}</Text>
            </View>
            <View className="items-center">
            <Text className="text-white text-sm">Conexões</Text>
            <View className="flex-row mt-1">
                <Image source={icons.discord} className="w-5 h-5 mx-1" />
                <Image source={icons.twitch} className="w-5 h-5 mx-1" />
                <Image source={images.furiaEsports} className="w-5 h-5 mx-1" />
                <Image source={icons.addConn} className="w-5 h-5 ml-1 opacity-60" />
            </View>
            </View>
        </View>

        <View className="mt-6 bg-secondary p-4 rounded-lg">
            <Text className="text-white text-lg mb-2">Jogos</Text>
            <View className="flex-row flex-wrap">
                <Image source={images.cs2} className="w-20 h-24 mr-2" />
                <Image source={images.valorant} className="w-20 h-24 mr-2" />
            </View>
        </View>

        <View className="mt-4 bg-secondary p-4 rounded-lg">
            <Text className="text-white text-lg mb-2">Missões concluídas</Text>
            <View className="flex-1 bg-primary p-2 rounded-lg">
                <Text className="text-light-100 font-semibold text-base">Complete seu perfil</Text>
                <Text className="text-gold-100 text-sm">+30 XP</Text>
            </View>
            <TouchableOpacity className="mt-2 self-end">
            <Text className="text-yellow-400">Ver todas →</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

export default Perfil;