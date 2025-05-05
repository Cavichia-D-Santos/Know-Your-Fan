import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';

const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Sair da conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' }, {text: 'Sair', style: 'cancel'}
      ],
      { cancelable: true }
    );
  };

  const Option = ({ label, icon }: { label: string; icon: any }) => (
    <TouchableOpacity className="flex-row items-center justify-between bg-secondary p-4 rounded-lg mt-4">
      <View className="flex-row items-center">
        <Image source={icon} className="w-6 h-6 mr-4 tint-white" />
        <Text className="text-white text-base">{label}</Text>
      </View>
      <Text className="text-light-100 text-lg">›</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-primary p-4 pt-20">
        <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-white text-base pb-4">← Voltar</Text>
        </TouchableOpacity>
      <Text className="text-white text-2xl font-bold mb-4">Configurações</Text>

      <Option label="Editar Perfil" icon={icons.edit}/>
      <Option label="Notificações" icon={icons.notification}/>
      <Option label="Conexões" icon={icons.connections}/>

      <TouchableOpacity onPress={handleLogout} className="bg-red-500 py-3 px-4 rounded mt-10">
        <Text className="text-white font-semibold text-center">Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;