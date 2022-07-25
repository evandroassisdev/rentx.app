import { useNavigation, useRoute } from '@react-navigation/native';
import DoneSvg from '@src/assets/done.svg';
import LogoSvg from '@src/assets/logo_background_gray.svg';
import { ConfirmButton } from '@src/components/ConfirmButton';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Container, Content, Title, Message, Footer } from './styles';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
