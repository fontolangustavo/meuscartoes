import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { CreditCardInput } from "react-native-credit-card-input";

import { getCards, setCards } from './../services/CartoesService';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    botaoAdicionar: {
        borderRadius: 5,
        height: 50,
        margin: 15,
        backgroundColor: '#6C00CC',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    botaoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    botaoAdicionarTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ECEBEE',
        marginLeft: 5
    }
});

class AdicionarCartaoScreen extends Component {
    static navigationOptions = {
        title: 'Adicionar Cartão',
    };

    constructor(props) {
        super(props);
        this.state = {
            card: {

            },
            cards: [

            ]
        };
    }

    componentWillMount = async () => {
        let cards = await getCards();
        this.setState({ cards })
    }

    _onChange = (form) => {
        console.log(form);
        this.setState({ card: form });
    }

    _saveCard = async () => {
        let form = this.state.card;

        if (form.valid) {
            let card = {
                id: form.values.number,
                nomeCartao: form.values.name,
                numeroCartao: form.values.number,
                vencimentoCartao: form.values.expiry,
                type: form.values.type
            };

            let cards = this.state.cards;

            if (cards == null) {
                cards = [];
            }

            cards.push(card);
            setCards(cards);
            this.setState({ cards });

            this.props.navigation.goBack();
        } else {
            alert('Falha ao cadastrar o cartão.');
        }
    }

    render() {
        return (
            <View
                style={styles.container}>
                <CreditCardInput
                    requiresCVC={false}
                    requiresName={true}
                    inputContainerStyle={{}}
                    onChange={this._onChange} />
                <TouchableOpacity
                    style={styles.botaoAdicionar}
                    onPress={this._saveCard}>
                    <View
                        style={styles.botaoContainer}>
                        <Icon
                            name='credit-card'
                            color='white'>
                        </Icon>
                        <Text
                            style={styles.botaoAdicionarTexto}>
                            Adicionar cartão
                    </Text>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

export default AdicionarCartaoScreen;
