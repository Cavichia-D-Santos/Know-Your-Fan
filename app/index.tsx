import React, { useEffect } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants/theme';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/auth/login");
        }, 2000);
    }, []);

    return(
        <View className="flex-1 justify-center items-center">
            <Image className=' h-1/5 aspect-square'
            resizeMode='contain'
            source={require("../src/imagens/furiaEsports.png")}/>
        </View>
    )
}

export default index;