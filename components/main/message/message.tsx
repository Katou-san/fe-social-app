import { RootStack } from '@/app';
import { padding } from '@/components/customs/styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

const Message = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()
    const handleClick = () => {
        navigation.navigate('detail-mess')
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleClick}
            onLongPress={() => console.log('hold')}>

            <View style={styles.frameMessage}>
                <Image
                    style={styles.image}
                    source={require('@/assets/images/free-images.jpg')}
                    borderRadius={50}
                />

                <View style={styles.frameContent}>
                    <View>
                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.text}>new Message</Text>
                    </View>
                    <View style={styles.frameMoreContent}>
                        <Text style={styles.time}>22:00</Text>
                        <Text style={styles.noitifi}>21</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Message;

const styles = StyleSheet.create({
    frameMessage: {
        ...padding(0, 10, 0, 5),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        width: '100%',
        height: 73,
        backgroundColor: '#1F1F1F',
        cursor: 'pointer'
    },
    image: {
        width: 65,
        height: 65,
        zIndex: 2,
        borderRadius: 50,
    },
    frameContent: {
        paddingLeft: 8,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    title: {
        fontWeight: '900',
        color: '#fff',
        fontSize: 20,
        marginBottom: 5
    },
    text: {
        color: '#fff'
    },



    frameMoreContent: {
        width: 50,
        height: '100%',
        alignItems: "center"
    },

    time: {
        color: '#fff',
        marginBottom: 5
    },

    noitifi: {
        ...padding(2, 10),
        color: '#fff',
        width: 40,
        backgroundColor: '#0D6FD7',
        borderRadius: 23,
        textAlign: 'center'
    }


})
