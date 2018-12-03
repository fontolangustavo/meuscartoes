import React from 'react';
import { TouchableOpacity, Dimensions, Platform, Text } from 'react-native';

import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import IOSIcon from "react-native-vector-icons/Ionicons";

import HomeScreen from './screens/HomeScreen';
import CartoesScreen from './screens/CartoesScreen';
import AdicionarCartaoScreen from './screens/AdicionarCartaoScreen';

import SideMenuScreen from './screens/menu/SideMenuScreen';

const HomeContent = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}>
                        <IOSIcon name="ios-menu" size={30} />
                    </TouchableOpacity>
                ),
            })
        }
    }
);

const CartoesContent = createStackNavigator(
    {
        CartoesScreen: {
            screen: CartoesScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Lista de cartões',
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}>
                        <IOSIcon name="ios-menu" size={30} />
                    </TouchableOpacity>
                ),
            })
        },
        AdicionarCartaoScreen: {
            screen: AdicionarCartaoScreen
        }
    }
);

const AppMenuNavigator = createDrawerNavigator(
    {
        HomeScreen: {
            screen: HomeContent
        },
        CartoesScreen: {
            screen: CartoesContent
        }
    },
    {
        contentComponent: SideMenuScreen,
        drawerWidth: Dimensions.get('window').width - 120,
    }
);

const switchApp = createSwitchNavigator({
    App: AppMenuNavigator
});

export default createAppContainer(switchApp);

// export default AppRegistry(AppContent);