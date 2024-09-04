import { margin } from '@/components/customs/styles';
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';


type Props = {
    Topic_Id?: string,
    func?: () => void
    children: React.ReactNode
}

const LayoutIcon = ({ children, func = () => { } }: Props) => {
    const animatedItem = useRef(new Animated.Value(0)).current

    const [togoIcon, set_TogoIcon] = useState(false)
    const activeItemIcon = {
        transform: [
            {
                rotate: animatedItem.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            }
        ],
    }

    const TogoItemIcon = () => {
        set_TogoIcon(!togoIcon)
        Animated.spring(animatedItem, {
            toValue: togoIcon ? 0 : 1,
            friction: 5,
            useNativeDriver: false
        }).start()
    }
    return (
        <TouchableOpacity onPress={() => {
            func()
            TogoItemIcon()
        }} activeOpacity={0.8}>
            <Animated.View style={[styles.ItemIcon, activeItemIcon]} >
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
}

export default LayoutIcon;
const styles = StyleSheet.create({
    ItemIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#484848",
        ...margin(2),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        cursor: 'pointer'
    }
})