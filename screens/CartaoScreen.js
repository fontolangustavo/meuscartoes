import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { TextMask } from 'react-native-masked-text';
import styles from './CartoesScreen.style';

class CartaoScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        let bannerSource = '';

        switch (this.props.type) {
            case 'elo':
                bannerSource = require('./../assets/img/banner-cards/elo-card.png');
                break;
            case 'visa':
                bannerSource = require('./../assets/img/banner-cards/visa.png');
                break;
            case 'master-card':
                bannerSource = require('./../assets/img/banner-cards/mastercard.png');
                break;
            case 'american-express':
                bannerSource = require('./../assets/img/banner-cards/american-express.png');
                break;
            case 'diners-club':
                bannerSource = require('./../assets/img/banner-cards/diners-club.png');
                break;
            case 'discover':
                bannerSource = require('./../assets/img/banner-cards/discover.png');
                break;
            default:
                bannerSource = require('./../assets/img/banner-cards/credit-card.png');
                break;
        }

        return (
            <View
                style={styles.portfolio}>
                {/* Imagem do cartao */}
                <View
                    style={styles.portfolioImagem}>
                    <Image
                        style={styles.cartaoImagem}
                        source={bannerSource}
                    />
                </View>

                {/* Informacoes do cartao */}
                <View
                    style={styles.portfolioDados}>
                    {/* Nome do proprietario do cartao */}
                    <View>
                        <Text
                            style={styles.dadosCartao}>
                            Nome no cartão
                </Text>
                        <Text
                            style={styles.dadosCartaoValue}>
                            {this.props.nomeCartao}
                        </Text>
                    </View>

                    {/* Numero do cartao */}
                    <View>
                        <Text
                            style={styles.dadosCartao}>
                            Numero do cartão
                </Text>
                        <TextMask
                            style={styles.dadosNumeroCartaoValue}
                            value={this.props.numeroCartao}
                            type={'credit-card'}
                            options={{
                                obfuscated: false
                            }}
                        />
                    </View>

                    <View
                        style={styles.dadosDatasCartaoGrid}>
                        <Text
                            style={styles.dadosDatasCartaoData}>
                            Validade
                </Text>
                        <Text
                            style={styles.dadosDatasCartaoDataValue}>
                            {this.props.vencimentoCartao}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CartaoScreen;
