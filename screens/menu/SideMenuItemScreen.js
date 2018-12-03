import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';


import styles from './SideMenuItemScreen.style';

class SideMenuItemScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {

        };

    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.onClick.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.navSectionStyle}>
                <View
                    style={{ width: '20%' }}>
                    <Icon
                        name={this.props.icon}
                        color={'#6C00CC'}
                        size={22} />
                </View>
                <View
                    style={{ width: '80%' }}>
                    <Text style={styles.navItemStyle} onPress={this.navigateToScreen(this.props.component)}>
                        {this.props.text}
                    </Text>
                </View>
            </View>
        );
    }
}

export default SideMenuItemScreen;
