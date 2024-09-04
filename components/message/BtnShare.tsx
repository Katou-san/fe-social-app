import { margin, padding } from "@/components/customs/styles";
import LayoutIcon from "@/components/message/@layoutIcon";
import { ShareIcon_configs } from "@/configs/mess.config";
import ShareIcon_Fig from "@/icons/figma/Share";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { useClickOutside } from "react-native-click-outside";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
type Props = {
    Topic_Id?: string,
    Type?: string,
    arrow: 'left' | 'right'
}
const BtnShare = ({ Topic_Id = '', Type = '', arrow = 'left' }: Props) => {
    const animated_layoutListIcon = useRef(new Animated.Value(0)).current
    const [togoLongPressShare, set_togoLongPressShare] = useState(false)

    const refFrameListIcon = useClickOutside<View>(() => {
        if (togoLongPressShare) {
            set_togoLongPressShare(false)
        }
    });




    const TogoLayout = () => {
        set_togoLongPressShare(!togoLongPressShare)
    }

    useEffect(() => {
        Animated.spring(animated_layoutListIcon, {
            toValue: togoLongPressShare ? 135 : 0,
            friction: 5,
            useNativeDriver: false
        }).start()
    }, [togoLongPressShare])

    return (
        <View>
            <TouchableOpacity activeOpacity={0.9} onLongPress={() => TogoLayout()}>
                <View style={styles.btnShare} ref={refFrameListIcon}>
                    <ShareIcon_Fig />
                </View>
            </TouchableOpacity>
            <Animated.View style={[styles.frameListIcon,
            { width: togoLongPressShare ? animated_layoutListIcon : 0, overflow: 'hidden', ...padding(0) },
            arrow == 'left' ? { right: "100%" } : { left: '100%' }]} >
                {ShareIcon_configs.map((icon, i) =>
                    <LayoutIcon key={i} func={() => TogoLayout()}>
                        {icon}
                    </LayoutIcon>
                )}
            </Animated.View>
        </View>
    );
};

export default BtnShare;
const styles = StyleSheet.create({
    frameBtn: {
        position: "relative",
    },
    btnShare: {
        marginLeft: 5,
        marginRight: 5,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: "#484848",
        justifyContent: "center",
        alignItems: "center",
    },
    frameListIcon: {
        width: 0,
        position: "absolute",
        flexDirection: "row",
        ...padding(2, 5),
        backgroundColor: "#fff",
        borderRadius: 15,
        bottom: -3
    },

});
