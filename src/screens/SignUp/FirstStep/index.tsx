import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@src/components/BackButton';
import { Bullet } from '@src/components/Bullet';
import React from 'react';

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from './styles';

export function FirstStep() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
        <Steps>
          <Bullet />
          <Bullet />
        </Steps>
      </Header>

      <Title>Crie sua{'\n'}conta</Title>
      <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
}
