import { Button } from '@src/components/Button';
import { Input } from '@src/components/Input';
import { PasswordInput } from '@src/components/PasswordInput';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  Footer,
  Container,
  Header,
  SubTitle,
  Title,
  ButtonLogin,
  Form,
} from './styles';

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

      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <PasswordInput iconName="lock" placeholder="Senha" />
      </Form>

      <Footer>
        <ButtonLogin>
          <Button title="Login" onPress={() => {}} disabled />
        </ButtonLogin>
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
