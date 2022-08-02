import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarSvg from '@src/assets/car.svg';
import HomeSvg from '@src/assets/home.svg';
import PeopleSvg from '@src/assets/people.svg';
import { Home } from '@src/screens/Home';
import { MyCars } from '@src/screens/MyCars';
import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.background_primary,
        },
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
      }}>
      <Screen
        name="HomeTab"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
