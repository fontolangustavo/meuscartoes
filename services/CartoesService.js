import { AsyncStorage } from 'react-native';

export const getCards = async () => {
    let cards = await AsyncStorage.getItem('cards');

    return JSON.parse(cards);
}

export const setCards = async (cards) => {
    return await AsyncStorage.setItem('cards', JSON.stringify(cards));
}