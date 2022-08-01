import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@src/hooks/auth';
import React from 'react';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();
  console.log('teste', user);

  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
