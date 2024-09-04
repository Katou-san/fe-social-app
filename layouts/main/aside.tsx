import HeaderAside from '@/components/aside/headerAside/headerAside';
import { useLayout } from '@/contexts/providerLayout';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useClickOutside } from 'react-native-click-outside';

const Aside = () => {
    const { set_Aside, stateAside } = useLayout()
    let count = 0;


    const animationValue = useRef(new Animated.ValueXY({
        x: 0,
        y: 0
    })).current

    const resetPotion = () => {
        Animated.timing(animationValue, {
            toValue: {
                x: 0,
                y: 0
            },
            duration: 250,
            useNativeDriver: false
        }).start()

        setTimeout(() => {
            set_Aside(false)
        }, 700)
    }

    const refAside = useClickOutside<View>(() => {
        resetPotion()
    });


    useEffect(() => {
        if (stateAside) {
            Animated.timing(animationValue, {
                toValue: {
                    x: 250,
                    y: 0
                },
                duration: 250,
                useNativeDriver: false
            }).start()
        }
    }, [stateAside, refAside])

    return (
        <Animated.View ref={refAside} style={[styles.frameAside, { width: animationValue.x }]}>
            <View >
                <HeaderAside />
            </View>

        </Animated.View>
    );
}

export default Aside;

const styles = StyleSheet.create({
    frameAside: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        width: '80%',
        height: '100%',
        backgroundColor: '#161616',
        flex: 5,
        borderBottomRightRadius: 24,
        borderTopRightRadius: 24,
        overflow: 'hidden',
    }
})
