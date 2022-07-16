import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '@src/screens/CarDetails';
import { Home } from '@src/screens/Home';
import { Scheduling } from '@src/screens/Scheduling';
import { SchedulingComplete } from '@src/screens/SchedulingComplete';
import { SchedulingDetails } from '@src/screens/SchedulingDetails';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
