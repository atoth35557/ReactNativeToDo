import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import SignInScreen from '../scenes/Auth/SignInScreen';

const Stack = createStackNavigator();

export const AuthNavigator = ():React.ReactElement => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
        </Stack.Navigator>
    )
}
