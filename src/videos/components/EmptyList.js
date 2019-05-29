import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function EmptyList(props) {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        elevation: 6,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        //backgroundColor: '#ffffff',
    },
})
