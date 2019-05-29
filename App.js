import React from 'react'
import { Text, View } from 'react-native'

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header'
import SuggestionList from './src/videos/containers/SuggestionList'

type Props = {}
export default class App extends React.Component<Props> {
    render() {
        return (
            <Home>
                <Header>
                    <Text>Soy el primogenito</Text>
                    <Text>Soy el segundo</Text>
                    <Text>Soy el tercero</Text>
                </Header>
                <Text>Buscador</Text>
                <Text>Categorias</Text>
                <SuggestionList />
            </Home>
        )
    }
}
