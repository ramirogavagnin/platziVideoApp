import CardView from 'react-native-cardview'
import React from 'react'
import { Text } from 'react-native'

export default function CardViewExample() {
    return (
        <CardView cardElevation={7} cardMaxElevation={7} cornerRadius={5}>
            <Text>Elevation bla bla</Text>
        </CardView>
    )
}
