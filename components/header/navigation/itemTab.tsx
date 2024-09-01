import { margin } from '@/components/customs/styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type Props = {
    title: string
    currentIndex: number
    index: number
    setIndex: (index: number) => void
}
const ItemTab = ({ title, currentIndex, index, setIndex }: Props) => {
    return (
        <TouchableOpacity onPress={() => setIndex(index)}>
            <View style={stypes.frameTab} >
                <View style={stypes.contentTab}>
                    <Text style={{ ...stypes.title, color: currentIndex == index ? "#0D6FD7" : "#fff" }}>{title}</Text>
                    <View style={{ ...stypes.noitification, backgroundColor: currentIndex == index ? "#0D6FD7" : "#767676" }}>
                        <Text style={stypes.Number}>9+</Text>
                    </View>
                </View>
                <View style={currentIndex == index ? stypes.bottomLine : { height: 5 }}></View>
            </View>
        </TouchableOpacity>
    );
}

const stypes = StyleSheet.create({
    frameTab: {
        position: "relative",
        ...margin(0, 20),
        minWidth: 30
    },
    contentTab: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    noitification: {
        color: '#fff',
        flex: 1,
        backgroundColor: '#0D6FD7',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 27,
        height: 27,
        borderRadius: 50,
        marginLeft: 3
    },
    Number: {
        color: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    bottomLine: {
        ...margin(5, 0, 0),
        height: 5,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: '100%',
        backgroundColor: '#0D6FD7'
    }
})

export default ItemTab;
