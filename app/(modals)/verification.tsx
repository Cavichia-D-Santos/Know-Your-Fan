import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';

const Verification = () => {
  const router = useRouter();

  const handleInfo = () => {
    Alert.alert('EM ANÁLISE','Assim que comprovarmos sua identidade, seu perfil será verificado automaticamente.',
      [
        {
          text: 'OK',
          onPress: () => router.push('/profile'),
        },
      ]
    );
  };

  return (
    <ScrollView className="flex-1 bg-primary p-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-white text-base">← Voltar</Text>
      </TouchableOpacity>

      <View className="items-center mt-6">
        <View className="flex-row items-center">
          <Text className="text-xl text-white font-bold mr-2">@Mister Sora</Text>
          <Image source={images.badge_verified} className="w-5 h-5" />
        </View>
      </View>

      <Text className="text-white mt-4 text-base">
        Mostre que você é um{' '}
        <Text className="text-yellow-400">superfã</Text>, com uma badge exclusiva e extras. Ser verificado é{' '}
        <Text className="text-yellow-400">totalmente gratuito</Text>.
      </Text>

      <Text className="text-white font-semibold mt-6 mb-2">Benefícios</Text>
      <Text className="text-light-100">• Lorem ipsum dolor sit amet</Text>
      <Text className="text-light-100">• Consectetur adipiscing elit</Text>
      <Text className="text-light-100">• Sed do eiusmod tempor</Text>

      <Text className="text-white font-semibold mt-6 mb-2">CPF</Text>
      <TextInput className="bg-white text-black rounded p-2 mb-4" placeholder="000.000.000-00" />

      <Text className="text-white font-semibold mb-2">Estado</Text>
      <TextInput className="bg-white text-black rounded p-2 mb-4" placeholder="Ex: SP" />

      <View className="flex-row justify-between">
        <View className="flex-1 mr-2">
          <Text className="text-white font-semibold mb-2">Cidade</Text>
          <TextInput className="bg-white text-black rounded p-2 mb-4" placeholder="Ex: São Paulo" />
        </View>
        <View className="w-28">
          <Text className="text-white font-semibold mb-2">CEP</Text>
          <TextInput className="bg-white text-black rounded p-2 mb-4" placeholder="00000-000" />
        </View>
      </View>


      <View className="flex-row items-center">
        <Text className="text-white font-semibold">Documento (frente)</Text>
      </View>
      <TouchableOpacity className="bg-white rounded h-32 mt-2 mb-6 justify-center items-center">
        <Text className="text-black">Inserir imagem</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-yellow-400 py-3 rounded items-center mt-4" onPress={handleInfo}>
        <Text className="text-black font-semibold text-lg">Próximo</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Verification;