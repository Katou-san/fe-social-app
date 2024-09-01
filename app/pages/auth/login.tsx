import { padding } from '@/components/customs/styles';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth_LoginType, authModel } from '@/model/auth.model';
import { authValidator } from '@/utils/validates/auth.validate';
import { authApi } from '@/api/auth.api';
import { setItem } from '@/configs/storage.config';
import { useRouter } from 'expo-router';
import ItemCircel from '@/components/auth/login/itemCircel';
export const LoginSceen = () => {
    const [login_value, set_Login] = useState<auth_LoginType>(authModel.init_Login)
    const list = ['face.svg', 'GG.svg', 'X.svg', 'Git.svg']
    const handleSubmit = () => {
        const routes = useRouter()
        const checkError = authValidator.loginValidate(login_value)
        if (checkError.State) {
            authApi.login(login_value)
                .then(res => {
                    if (res.statusCode == 200) {
                        setItem('accessToken', res.data?.accessToken)
                        routes.push('/main')
                    }
                })
        } else {
            console.log(checkError)
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.frameLogin}>
                    <View style={styles.frameHeader}>
                        <Text style={styles.textHeader}>Welcome</Text>
                        <View style={styles.frameOptionsHeader}>
                            <Text style={styles.textOptionsHeader}>Email</Text>
                            <Text style={styles.textOptionsHeader}>Phone</Text>
                        </View>
                    </View>
                    <View style={styles.frameBody}>
                        <View style={styles.frameInput}>
                            <View style={styles.frameIcon}></View>
                            <TextInput style={{ flex: 2, color: '#fff' }}
                                placeholderTextColor={'#fff'}
                                placeholder='Email'
                                value={login_value.Email}
                                onChangeText={(text) => set_Login({ ...login_value, Email: text })}
                            />
                            <View style={styles.frameIcon}></View>
                        </View>
                        <View style={styles.frameInput}>
                            <View style={styles.frameIcon}></View>
                            <TextInput
                                style={{ flex: 2, color: '#fff' }}
                                placeholderTextColor={'#fff'}
                                placeholder='Password'
                                onChangeText={(text) => set_Login({ ...login_value, Pass: text })}
                            />
                            <View style={styles.frameIcon}></View>
                        </View>
                        <Text style={{ ...styles.colorWhite, ...styles.forgot }}>Forgot Password?</Text>
                        <TouchableOpacity onPress={handleSubmit}>
                            <View style={styles.btnLogin}>
                                <Text style={styles.btnLoginText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.frametextFooter}>
                            <Text style={styles.colorWhite}>Dont have account</Text>
                            <Text style={styles.textFooter}>Sign Up</Text>
                        </View>
                    </View>
                    <View style={styles.frameFooter}>
                        <View style={styles.frameLine}>
                            <Text style={styles.line}></Text>
                            <Text style={styles.colorWhite}>Or</Text>
                            <Text style={styles.line}></Text>
                        </View>
                    </View>
                    <View>
                        {list.map((item, i) => <ItemCircel nameFile={String(item)} key={i} />)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    colorWhite: {
        color: '#fff'
    },

    frameLogin: {
        ...padding(20, 20, 0),
        backgroundColor: '#000'
    },
    frameHeader: {
        width: '100%',
    },
    frameOptionsHeader: {
        marginTop: 50,
        width: '100%',
        backgroundColor: '#5E7C9D',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        ...padding(8),
        borderRadius: 24
    },
    textHeader: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textOptionsHeader: {
        width: '50%',
        fontSize: 16,
        fontWeight: '700',
        ...padding(12, 20),
        backgroundColor: '#fff',
        borderRadius: 15,
        textAlign: 'center'
    },









    frameBody: {
        marginTop: 60
    },

    frameInput: {
        ...padding(15, 10),
        backgroundColor: '#5E7C9D',
        borderRadius: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    frameIcon: {
        marginRight: 10,
    },

    forgot: {
        width: '100%',
        textAlign: 'right',
    },
    btnLogin: {
        marginTop: 50,
        ...padding(15, 10),
        backgroundColor: '#228DFF',
        borderRadius: 23,
    },
    btnLoginText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',

    },

    frametextFooter: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textFooter: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#0084FF',
    },


    frameFooter: {

    },

    frameLine: {
        marginTop: 60,
        height: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        width: '40%',
        height: 2,
        borderRadius: 20,
        backgroundColor: '#fff'
    }
})

