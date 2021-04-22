import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AppRoute } from './app-routes';
import { AuthNavigator } from './AuthNavigator';

const Stack = createStackNavigator();

export const AppNavigator = (props):React.ReactElement => {
    return (
        <Stack.Navigator {...props} headerMode="none">
            <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
        </Stack.Navigator>
    )
}
