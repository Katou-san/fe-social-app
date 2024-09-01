import HeaderAside from '@/components/aside/headerAside/headerAside';
import { useLayout } from '@/contexts/providerLayout';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useClickOutside } from 'react-native-click-outside';

const Aside = () => {
    const { set_Aside, stateAside } = useLayout()
    let count = 0;
    const refAside = useClickOutside<View>(() => {

        if (stateAside && count == 1) {
            set_Aside(false)
            count = 0
        } else {
            count = 1;
        }
    });

    const animationValue = useRef(new Animated.ValueXY({
        x: 0,
        y: 0
    })).current
    useEffect(() => {
        if (stateAside) {
            Animated.timing(animationValue, {
                toValue: {
                    x: 250,
                    y: 0
                },
                duration: 200,
                useNativeDriver: false
            }).start()
        }

    }, [animationValue, stateAside])
    return (
        <Animated.View style={[styles.frameAside, { width: stateAside ? animationValue.x : 0 }]} ref={refAside}>
            <HeaderAside />
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
