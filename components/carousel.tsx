import { View, Image, Button, Animated, Dimensions, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import React from "react";

type Props = {
    images: any[];
}

const Carousel: React.FC<Props> = ({ images }) => {
    const animation = useRef(new Animated.Value(0));
    const [imagemAtual, setImagem] = useState(0);

    const handleAnimation = () => {
        let newImagemAtual = imagemAtual + 1;

        if(newImagemAtual >= images.length){
            newImagemAtual = 0;
        }

        Animated.spring(animation.current, {
            toValue: -(Dimensions.get('screen').width * newImagemAtual),
            useNativeDriver: true,
        }).start();
        setImagem(newImagemAtual);
    }

    return(
        <React.Fragment>
            <View>
                <Animated.View style={[styles.container, {
                    transform: [{ translateX: animation.current}]
                }]}>
                    {images.map((image, index) => (
                        <Image key={index} source={image}/>
                    ))}
                </Animated.View>
            </View>
            <Button title="NOTÍCIAS" onPress={handleAnimation}/>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 500,
        width: Dimensions.get('screen').width,
    },
    container: {
        flexDirection: 'row',
    }
})

export default Carousel;