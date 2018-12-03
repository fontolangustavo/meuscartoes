import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import FAB from 'react-native-fab'

import CartaoScreen from './CartaoScreen';
import styles from './CartoesScreen.style';

import { getCards, setCards } from './../services/CartoesService';

class CartoesScreen extends Component {
    static navigationOptions = {
        title: 'Lista de cartões',
    };

    constructor(props) {
        super(props);

        this.state = {
            cards: [
            ]
        };

        this.subs = [
            this.props.navigation.addListener('didFocus', this.componentWillMount),
        ];
    }

    componentWillMount = async () => {
        let cards = await getCards();

        this.setState({ cards });
    }

    _longPress = async ({ index }) => {
        Alert.alert(
            'Apagar Cartão',
            'Deseja apagar o cartão selecionado?',
            [
                { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Sim', onPress: () => this._apagarCartao(index) },
            ],
            { cancelable: false }
        );
    }

    _apagarCartao(index) {
        let cards = this.state.cards;

        cards.splice(index, 1);
        setCards(cards);

        this.setState({ cards })
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onLongPress={this._longPress}>
                <CartaoScreen
                    id={item.id}
                    type={item.type}
                    nomeCartao={item.nomeCartao}
                    numeroCartao={item.numeroCartao}
                    vencimentoCartao={item.vencimentoCartao} />
            </TouchableOpacity>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={styles.content}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.cards}
                    extraData={this.state}
                    renderItem={this._renderItem}
                />
                <FAB
                    buttonColor="#6C00CC"
                    onClickAction={() => { navigate('AdicionarCartaoScreen') }}
                    visible={true}
                    snackOffset={1}
                    iconTextComponent={
                        <Icon
                            name='add'
                            color="#ECEBEE">
                        </Icon>} />

            </View>

        );
    }
}

export default CartoesScreen;
