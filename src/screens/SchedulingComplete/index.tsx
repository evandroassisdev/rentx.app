import { useNavigation } from '@react-navigation/native';
import DoneSvg from '@src/assets/done.svg';
import LogoSvg from '@src/assets/logo_background_gray.svg';
import { ConfirmButton } from '@src/components/ConfirmButton';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Container, Content, Title, Message, Footer } from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}até a concessionária da RENTX{'\n'}pegar
          o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
