import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardView from 'react-native-cardview'

export default function EmptyList(props) {
    return (
        <View style={styles.container}>
            <CardView style={styles.card} cardElevation={7} cardMaxElevation={9} cornerRadius={7}>
                <Text style={styles.text}>Ups! Parece que no hay sugerencias :(</Text>
            </CardView>
            <CardView style={styles.card} cardElevation={7} cardMaxElevation={9} cornerRadius={7}>
                <Text>Ups! Parece que no hay sugerencias :(</Text>
            </CardView>
            <CardView style={styles.card} cardElevation={7} cardMaxElevation={9} cornerRadius={7}>
                <Text>Ups! Parece que no hay sugerencias :(</Text>
            </CardView>
            <CardView style={styles.card} cardElevation={7} cardMaxElevation={9} cornerRadius={7}>
                <Text>Ups! Parece que no hay sugerencias :(</Text>
            </CardView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        width: '45%',
    },
    text: {
        textAlign: 'center',
    },
})
