import React from 'react'
import { Text, View, Image, SafeAreaView, StyleSheet } from 'react-native'

import Logo from '../../images/logo.png'

export default function Header(props) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Image source={Logo} style={styles.logo} />
                </View>
                <View>{props.children}</View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container: {
        padding: 10,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
