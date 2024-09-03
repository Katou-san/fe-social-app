import { margin, padding } from "@/components/customs/styles";
import { ShareIcon_configs } from "@/configs/mess.config";
import ShareIcon_Fig from "@/icons/figma/Share";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useClickOutside } from "react-native-click-outside";
type Props = {
    Topic_Id?: string,
    Type?: string,
    arrow: 'left' | 'right'
}
const BtnShare = ({ Topic_Id = '', Type = '', arrow = 'left' }: Props) => {
    const [togoLongPressShare, set_togoLongPressShare] = useState(false)
    const refFrameListIcon = useClickOutside<View>(() => {
        if (togoLongPressShare) {
            set_togoLongPressShare(false)
        }
    });
    return (
        <View>
            <TouchableOpacity activeOpacity={0.9} onLongPress={() => set_togoLongPressShare(!togoLongPressShare)}>
                <View style={styles.btnShare} ref={refFrameListIcon}>
                    <ShareIcon_Fig />
                </View>
            </TouchableOpacity>
            <View style={[styles.frameListIcon,
            { width: togoLongPressShare ? 'auto' : 0, overflow: 'hidden', ...padding(0) },
            arrow == 'left' ? { right: "100%" } : { left: '100%' }]} >
                {ShareIcon_configs.map((icon, i) =>
                    <TouchableOpacity key={i} onPress={() => { }}>
                        <View style={styles.ItemIcon} >
                            {icon}
                        </View>
                    </TouchableOpacity>
                )}
            </View>
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
        position: "absolute",
        flexDirection: "row",
        ...padding(2, 5),
        backgroundColor: "#fff",
        borderRadius: 15,
        bottom: -3
    },
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
});
