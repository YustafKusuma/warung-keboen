import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';
import ShoppingCartScreen from './Screen/ShoppingCart';
import ProfileScreen from './Screen/ProfilScreen';

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions= {{header: () => null}}>
            <Stack.Screen name= 'Halaman Utama' component= {HomeScreen} />
            <Stack.Screen name= 'Details' component= {DetailScreen} />
        </Stack.Navigator>
    );
};

const ShoppingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions= {{header: () => null}} >
            <Stack.Screen name= 'Keranjang Belanja' component= {ShoppingCartScreen} />
        </Stack.Navigator>
    );
};

const ProfileScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
            <Stack.Screen name='Layar Profil' component= {ProfileScreen} />
        </Stack.Navigator>
    );
};

export {MainStackNavigator, ShoppingStackNavigator, ProfileScreenNavigator};