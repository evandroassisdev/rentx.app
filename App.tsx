import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import { CarDetails } from '@src/screens/CarDetails';
import { Home } from '@src/screens/Home';
import { Scheduling } from '@src/screens/Scheduling';
import { SchedulingDetails } from '@src/screens/SchedulingDetails';
import theme from '@src/styles/theme';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <SchedulingDetails />
    </ThemeProvider>
  );
}
