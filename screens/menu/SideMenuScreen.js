import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SideMenuItemScreen from './SideMenuItemScreen';
import styles from './SideMenuScreen.style';

class SideMenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Foto de perfil */}
                <View style={styles.containerMenuFoto}>
                    <ImageBackground
                        source={require('../../assets/img/card-front.png')}
                        style={{ width: '100%', height: '100%' }}>
                        <View
                            style={styles.itensMenuFoto}>
                            <Image
                                style={styles.menuFotoItem}
                                source={require('../../assets/img/person.png')} />
                            <Text style={styles.menuNomeItem}>
                                Joao da Silva dos Santos
                            </Text>
                            <Text style={styles.menuEmailItem}>
                                joao.silva@gmail.com
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView>
                    <View>
                        <SideMenuItemScreen
                            icon={'home'}
                            text={'Home'}
                            component={'HomeScreen'}
                            onClick={this.props} />

                        <SideMenuItemScreen
                            icon={'credit-card'}
                            text={'Lista de cartões'}
                            component={'CartoesScreen'}
                            onClick={this.props} />
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Icon
                        name={'exit-to-app'}
                        color={'#ECEBEE'}
                        size={24} />
                    <Text
                        style={styles.footerText}>Sair</Text>
                </View>
            </View>
        );
    }
}

export default SideMenuScreen;
