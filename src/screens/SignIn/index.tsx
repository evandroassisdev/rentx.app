import { Button } from '@src/components/Button';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';

import { Footer, Container, Header, SubTitle, Title } from './styles';

export function SignIn() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}uma experiência incrível.
        </SubTitle>
      </Header>

      <Footer>
        <Button title="Login" onPress={() => {}} disabled />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => {}}
        />
      </Footer>
    </Container>
  );
}
