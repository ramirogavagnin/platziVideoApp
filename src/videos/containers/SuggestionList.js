import React from 'react'
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native'
import EmptyList from '../components/EmptyList'
import CardView from 'react-native-cardview'
import Icon from 'react-native-vector-icons/AntDesign'

export default class SuggestionList extends React.Component {
    /* renderEmptyList = () => <EmptyList text={'No hay sugerencias por el momento'} /> */

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return (
                <CardView
                    style={styles.item}
                    cardElevation={4}
                    cardMaxElevation={4}
                    cornerRadius={10}
                >
                    <Icon name="plus" size={40} color="#fff" />
                    <Text style={styles.itemText}>Ver mas</Text>
                </CardView>
            )
        }
        return (
            <CardView style={styles.item} cardElevation={4} cardMaxElevation={4} cornerRadius={10}>
                <Icon name="heart" size={40} color="#fff" />
                <Text style={styles.itemText}>{item.firstName}</Text>
            </CardView>
        )
    }

    render() {
        const data = [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Freda',
                lastName: 'Grady',
                email: 'Leann_Berge@gmail.com',
                jobTitle: 'Legacy Brand Director',
                twitter: 'FredaGrady22221-7573',
                avatarUrl:
                    'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Major',
                lastName: 'Rodriguez',
                email: 'Ilene66@hotmail.com',
                jobTitle: 'Human Research Architect',
                twitter: 'MajorRodriguez61545',
                avatarUrl:
                    'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Daphney',
                lastName: 'Torphy',
                email: 'Ron61@hotmail.com',
                jobTitle: 'National Markets Officer',
                twitter: 'DaphneyTorphy96105',
                avatarUrl:
                    'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
            {
                id: 'a9748581-dfdc-4a78-930d-5205a2ccef48',
                firstName: 'Tatyana',
                lastName: 'Von',
                email: 'Herminio.Schmeler@hotmail.com',
                jobTitle: 'Central Branding Representative',
                twitter: 'TatyanaVon35871-3686',
                avatarUrl:
                    'https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon',
            },
            {
                id: '1921a734-cc05-4f71-a677-ffe38dda6958',
                firstName: 'Maude',
                lastName: 'Effertz',
                email: 'Dan_Weimann0@yahoo.com',
                jobTitle: 'Product Solutions Analyst',
                twitter: 'MaudeEffertz73114',
                avatarUrl:
                    'https://www.gravatar.com/avatar/01d0de92ec9ca4fdfbb99edf6a1abfea?d=identicon',
            },
        ]

        const formatData = (data, numColumns) => {
            const numberOfFullRows = Math.floor(data.length / numColumns)

            let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns
            while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
                data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
                numberOfElementsLastRow++
            }

            return data
        }
        const numColumns = 2

        return (
            <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
                keyExtractor={(item, index) => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 30,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flex: 1,
        margin: 7,
        height: Dimensions.get('window').height / 6,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
        fontSize: 20,
    },
})

/* 

export default class SuggestionList extends React.Component {
    renderEmptyList = () => <EmptyList text={'No hay sugerencias por el momento'} />
    render() {
        const list = [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Freda',
                lastName: 'Grady',
                email: 'Leann_Berge@gmail.com',
                jobTitle: 'Legacy Brand Director',
                twitter: 'FredaGrady22221-7573',
                avatarUrl:
                    'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Major',
                lastName: 'Rodriguez',
                email: 'Ilene66@hotmail.com',
                jobTitle: 'Human Research Architect',
                twitter: 'MajorRodriguez61545',
                avatarUrl:
                    'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Daphney',
                lastName: 'Torphy',
                email: 'Ron61@hotmail.com',
                jobTitle: 'National Markets Officer',
                twitter: 'DaphneyTorphy96105',
                avatarUrl:
                    'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
            {
                id: 'a9748581-dfdc-4a78-930d-5205a2ccef48',
                firstName: 'Tatyana',
                lastName: 'Von',
                email: 'Herminio.Schmeler@hotmail.com',
                jobTitle: 'Central Branding Representative',
                twitter: 'TatyanaVon35871-3686',
                avatarUrl:
                    'https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon',
            },
            {
                id: '1921a734-cc05-4f71-a677-ffe38dda6958',
                firstName: 'Maude',
                lastName: 'Effertz',
                email: 'Dan_Weimann0@yahoo.com',
                jobTitle: 'Product Solutions Analyst',
                twitter: 'MaudeEffertz73114',
                avatarUrl:
                    'https://www.gravatar.com/avatar/01d0de92ec9ca4fdfbb99edf6a1abfea?d=identicon',
            },
        ]
    
        return (
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <CardView
                        style={styles.card}
                        cardElevation={7}
                        cardMaxElevation={9}
                        cornerRadius={7}
                    >
                        <Text style={styles.text}>{item.firstName}</Text>
                    </CardView>
                )}
                keyExtractor={(item, index) => item.id}
                ListEmptyComponent={this.renderEmptyList}
                numColumns={2}
                contentContainerStyle={styles.container}
            />
        )
    }
} */

/* const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 10,
        // marginTop: 10,
        // marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
        // width: '45%',
    },
    text: {
        textAlign: 'center',
    },
})
 */
