
import Aside from '@/layouts/main/aside';
import Body from '@/layouts/main/body';
import Header from '@/layouts/main/header';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



export const HomeScreen = ({ navigation }: { navigation: any }) => {

    return (
        <View style={styles.frameMain}>
            <Header />
            <Aside />
            <Body />
        </View>
    );
}

const styles = StyleSheet.create({
    frameMain: {
        position: 'relative',
        backgroundColor: '#000',
        height: '100%',
    }
})

