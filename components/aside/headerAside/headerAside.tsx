import { margin, padding } from '@/components/customs/styles';
import { ArrowIcon_Fig } from '@/icons/figma/Arrow';
import { SunIcon_Fig } from '@/icons/figma/Sun';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const HeaderAside = () => {
    return (
        <View style={styles.frameHeaderAside}>
            <View style={styles.header}>
                <View>
                    <Image style={styles.image} source={require('@/assets/images/free-images.jpg')}
                        srcSet=''
                    />
                </View>
                <View><SunIcon_Fig w={30} /></View>
            </View>
            <View>
                <Text style={styles.Name}>Name</Text>
            </View>
            <View style={styles.FarmeInfo}>
                <Text style={styles.TextInfo}>Info</Text>
                <View><ArrowIcon_Fig arrowType='down' /></View>
            </View>
        </View>
    );
}

export default HeaderAside;


const styles = StyleSheet.create({
    frameHeaderAside: {
        ...padding(50, 20, 20),
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    Name: {
        ...margin(10, 0, 0),
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    FarmeInfo: {
        ...margin(10, 0, 0),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TextInfo: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'white'
    }
})