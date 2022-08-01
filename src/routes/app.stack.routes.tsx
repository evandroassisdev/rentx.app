import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '@src/screens/CarDetails';
import { Confirmation } from '@src/screens/Confirmation';
import { Home } from '@src/screens/Home';
import { MyCars } from '@src/screens/MyCars';
import { Scheduling } from '@src/screens/Scheduling';
import { SchedulingDetails } from '@src/screens/SchedulingDetails';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
