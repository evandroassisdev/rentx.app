import loadinCar from '@src/assets/loadingCar.json';
import LottieView from 'lottie-react-native';
import React from 'react';

import { Container } from './styles';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadinCar}
        style={{ height: 70 }}
        resizeMode="contain"
        loop
        autoPlay
      />
    </Container>
  );
}
