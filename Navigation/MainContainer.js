import * as React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MainStackNavigator, ShoppingStackNavigator, ProfileScreenNavigator} from './StackNavigator';

// Screen names
const homeName = 'Home';
const shoppingCartName = 'Shopping Cart';
const ProfileScreenName = 'Profile Screen';

const tab = createBottomTabNavigator();

const MainContainer = () => {
    return(
        <tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (rn === shoppingCartName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if (rn === ProfileScreenName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}>

                <tab.Screen name= {homeName} component={MainStackNavigator}/>
                <tab.Screen name= {shoppingCartName} component={ShoppingStackNavigator}/>
                <tab.Screen name= {ProfileScreenName} component={ProfileScreenNavigator} />
        </tab.Navigator>
    )
}

export default MainContainer;