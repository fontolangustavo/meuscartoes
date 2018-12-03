import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Meus Cartões</Text>
                <Text style={styles.instructions}>Aplicativo simples para o gerenciamento de cartões,
                com um cadastro de cartões pessoal, listando e excluir os cartões ja cadastrados. </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        lineHeight: 22
    },
});


export default HomeScreen;