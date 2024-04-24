import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

export default function GriddyAnimation() {
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const moveMan = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(translateX, {
                        toValue: 150,
                        duration: 1000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateX, {
                        toValue: -150,
                        duration: 1000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ]),
                {
                    iterations: 2 // change iterations as you need
                }
            ).start();
        };

        moveMan();
    }, [translateX]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('./man.png')}
                style={[styles.man, { transform: [{ translateX }] }]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    man: {
        width: 100,
        height: 100,
    },
});