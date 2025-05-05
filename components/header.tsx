import React from "react";
import { View, Image } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const Header = () => {
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: "#f6c60f",
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
      }}>
      <View style={{ width: 32 }} />

      <Image
        source={images.furiaEsports}
        style={{ width: 100, height: 50, resizeMode: "contain"}}
      />

      <Image
        source={icons.notification}
        style={{ width: 30, height: 30, resizeMode: "contain" }}
      />
    </View>
  );
};

export default Header;