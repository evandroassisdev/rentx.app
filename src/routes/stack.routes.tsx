import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '@src/screens/CarDetails';
import { Home } from '@src/screens/Home';
import { MyCars } from '@src/screens/MyCars';
import { Scheduling } from '@src/screens/Scheduling';
import { SchedulingComplete } from '@src/screens/SchedulingComplete';
import { SchedulingDetails } from '@src/screens/SchedulingDetails';
import { Splash } from '@src/screens/Splash';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
