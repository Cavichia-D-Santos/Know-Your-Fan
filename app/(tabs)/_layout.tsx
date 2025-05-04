import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const TabIcon = ({focused, icon, title}) => {

    if(focused){
        return(
            <ImageBackground source={images.highlight} 
                        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-6 justify-center items-center rounded-full overflow-hidden">
                            <Image source = {icon} tintColor="#f0f0f0"
                            className="size-5"/>
                            <Text className="text-light-200 text-base font-semibold ml-2">{title}</Text>
                        </ImageBackground>
        )
    }
    return(
        <View className="size-full justify-center items-center mt-6 rounded-full">
            <Image source={icon} tintColor="#ffffff" className="size-5"/>
        </View>
    )
}

const Layout = () => {
    return( 
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: '#494b50',
                borderRadius: 40,
                marginHorizontal: 15,
                marginBottom: 10,
                height: 60,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0fd23'
                
            }
        }}
    >
        <Tabs.Screen name = "index" 
        options = {{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.home} title="Home"/>
            )
        }}/>

        <Tabs.Screen name = "quests" 
        options = {{
            title: 'Missões',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.quest} title="Missões"/>
            )   
        }}/>

        <Tabs.Screen name = "leaderboard" 
        options = {{
            title: 'Placar',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.trophy} title="Placar"/>
            )
        }}/>

        <Tabs.Screen name = "profile" 
        options = {{
            title: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.user} title="Perfil"/>
            )
        }}/>
    </Tabs>
    )
}

export default Layout;