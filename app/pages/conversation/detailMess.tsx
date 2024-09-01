import { RootStack } from "@/app";
import { padding } from "@/components/customs/styles";
import { ArrowIcon_Fig } from "@/icons/figma/Arrow";
import CallIcon_Fig from "@/icons/figma/Call";
import SmileIcon_Fig from "@/icons/figma/emoji/Smile";
import { FolderIcon_Fig } from "@/icons/figma/Folder";
import { MixIcon_Fig } from "@/icons/figma/Mix";
import MoreIcon_Fig from "@/icons/figma/More";
import { createMess_Type, messageModel } from "@/model/message.model";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import LayoutConversation from "@/components/conversation/layoutConversation";

const DetailMess = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
    const [valueMessage, set_ValueMess] = useState<createMess_Type>(messageModel.init_create)
    const handleBack = () => {
        navigation.goBack();
    };

    const openGallery = async () => {
        // const result = await launchImageLibrary({ mediaType: 'mixed' })
        const result = await launchCamera({ mediaType: 'photo', cameraType: 'front' })
        console.log(result);
    }


    return (
        <View style={styles.frameConversitaion}>
            <View style={styles.headerConver}>
                <View style={styles.IconAndText}>
                    <TouchableOpacity onPress={handleBack}>
                        <ArrowIcon_Fig color="#000" arrowType="left" w={35} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.Name}>Name</Text>
                        <Text style={styles.SubContent}>Name</Text>
                    </View>
                </View>
                <View style={styles.CallAndMore}>
                    <TouchableOpacity>
                        <View style={styles.paddingIcon}>
                            <CallIcon_Fig color="#000" w={23} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.paddingIcon}>
                            <MoreIcon_Fig color="#000" w={23} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Body}>
                <LayoutConversation />
            </View>
            <View style={styles.Footer}>
                <SmileIcon_Fig w={30} />
                <TextInput
                    style={[styles.Input]}
                    multiline={true}
                    placeholder="Message..."
                    placeholderTextColor={'#fff'}
                    onChangeText={(text) => set_ValueMess({ ...valueMessage, Content: text })}
                    value={valueMessage.Content}
                />
                <View style={styles.CallAndMore}>
                    <TouchableOpacity onPress={openGallery}>
                        <View style={styles.paddingIcon}>
                            <FolderIcon_Fig />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.paddingIcon}>
                            <MixIcon_Fig w={33} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DetailMess;

const styles = StyleSheet.create({
    frameConversitaion: {
        position: "relative",
        flexDirection: "column",
        height: "100%",

    },
    headerConver: {
        position: "absolute",
        ...padding(10),
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        zIndex: 10,
    },
    IconAndText: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },

    CallAndMore: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    MixAndFile: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    paddingIcon: {
        ...padding(0, 5),
    },

    Name: {
        ...padding(0, 10),
        fontSize: 18,
        fontWeight: "bold",
    },
    SubContent: {
        ...padding(0, 10),
        fontSize: 14,
    },
    Body: {
        height: '100%',
        width: '100%',
    },
    Footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...padding(8, 5),
        backgroundColor: "#000",
    },
    Input: {
        marginLeft: 5,
        flex: 1,
        borderRadius: 10,
        alignContent: "center",
        ...padding(0, 10, 0, 0),
        color: "#fff",
    }
});
