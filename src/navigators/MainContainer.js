import * as React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MainStackNavigator, ShoppingStackNavigator, ProfileScreenNavigator} from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

// Screen names
const homeName = 'Home';
const shoppingCartName = 'Shopping Cart';
const ProfileScreenName = 'Profile Screen';

const tab = createBottomTabNavigator();

const MainContainer = () => {
    return(
        <NavigationContainer>
        <tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarStyle: [
                    {
                        backgroundColor: '#8BD272',
                        height: 60,
                        marginLeft: 10,
                        marginRight: 10,
                        paddingBottom: 5,
                        paddingTop: 10,
                        borderRadius: 10,
                    }
                ],
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

                    return <Ionicons name={iconName} size={30} color={'white'}/>
                }
            })}
            >
                <tab.Screen name= {homeName} component={MainStackNavigator}/>
                <tab.Screen name= {shoppingCartName} component={ShoppingStackNavigator}/>
                <tab.Screen name= {ProfileScreenName} component={ProfileScreenNavigator} />
        </tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;