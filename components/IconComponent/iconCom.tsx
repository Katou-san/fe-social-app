import { padding } from '@/components/customs/styles';
import LikeIcon_Fig from '@/icons/figma/emoji/Like';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type Props = {
    icon?: ReactNode | string
    number?: number,
    active?: boolean
    event?: () => void
}
const IconCom = ({ icon = <LikeIcon_Fig w={22} />, number = 0, active = false, event = () => { } }: Props) => {
    return (
        <TouchableOpacity onPress={event}>
            <View style={[styles.frameIcon, !active && { backgroundColor: '#807F7F' }]}>
                {typeof icon === 'string' ? <Text>{icon}</Text> : icon}
                <Text style={{ ...padding(0, 2), color: active ? '#0565FF' : `#fff`, fontWeight: 'bold' }}>{number}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default IconCom;

const styles = StyleSheet.create({
    frameIcon: {
        marginRight: 3,
        flexDirection: 'row',
        minWidth: 50,
        backgroundColor: '#7BC8FF',
        alignSelf: 'flex-start',
        ...padding(4),
        borderRadius: 15,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 3
    }
})
