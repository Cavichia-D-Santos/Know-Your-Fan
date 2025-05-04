import { Stack } from "expo-router";
import './globals.css';

const Layout = () => {
    return( 
    <Stack>
        <Stack.Screen name = "(auth)" options = {{ headerShown: false}}/>
        <Stack.Screen name = "(tabs)" options = {{ headerShown: false}}/>
    </Stack>
    )
}

export default Layout;