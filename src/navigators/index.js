import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, WelcomeScreen, SigninScreen, SignupScreen, ForgotPasswordScreen, RegisterPhoneScreen, VerificationScreen, HomeScreen, CategoryScreen, ProductScreen,BookmarkScreen, AccountScreen} from '../screens';
import HomeTabs from './BottomTabs';
import {useSelector, useDispatch} from 'react-redux';
import { GeneralAction } from '../actions';

const Stack = createStackNavigator();

const Navigators = () => {

    const {isAppLoading, token, isFirstTimeUse} = useSelector(
        state => state?.generalState,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GeneralAction.appStart());
      }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isAppLoading ? (
                    <Stack.Screen name="Splash" component={SplashScreen} />
                ) : !token || token === null || token === '' ? (
                <>
                    {isFirstTimeUse && (
                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    )}
                    <Stack.Screen name="Signin" component={SigninScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
                    <Stack.Screen name="Verification" component={VerificationScreen} />
                </>
                ) : (
                <>
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                    <Stack.Screen name="Category" component={CategoryScreen} />
                    <Stack.Screen name="Product" component={ProductScreen} />
                    <Stack.Screen name="Bookmark" component={BookmarkScreen} />
                    <Stack.Screen name="Account" component={AccountScreen} />
                </>
                    )}                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators
