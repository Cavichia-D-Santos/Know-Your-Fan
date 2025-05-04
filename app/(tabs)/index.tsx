import React, { useEffect } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push("/auth/login");
    //     }, 2000);
    // }, []);

    return(
        <View className="flex-1 justify-center items-center">
            <Text className='text-5xl text-primary'>Welcome</Text>
        </View>
    )
}

export default index;