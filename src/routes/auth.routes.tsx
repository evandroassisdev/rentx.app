import { createStackNavigator } from '@react-navigation/stack';
import { Confirmation } from '@src/screens/Confirmation';
import { SignIn } from '@src/screens/SignIn';
import { FirstStep } from '@src/screens/SignUp/FirstStep';
import { SecondStep } from '@src/screens/SignUp/SecondStep';
import { Splash } from '@src/screens/Splash';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
