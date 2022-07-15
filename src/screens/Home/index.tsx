import Logo from '@src/assets/logo.svg';
import { Car } from '@src/components/Car';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao Dia',
      price: 120,
    },
    thumbnail:
      'https://production.autoforce.com/uploads/version/profile_image/5505/comprar-prestige-plus-40-tfsi-s-tronic_7243435b0b.png',
  };
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
