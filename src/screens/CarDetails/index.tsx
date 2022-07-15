import { BackButton } from '@src/components/BackButton';
import { ImageSlider } from '@src/components/ImageSlider';
import React from 'react';

import {
  CarImages,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://production.autoforce.com/uploads/version/profile_image/5505/comprar-prestige-plus-40-tfsi-s-tronic_7243435b0b.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS Coupe</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit
          alias rerum corrupti cum et amet quod atque. Dolor molestiae doloribus
          iure laboriosam quos neque debitis expedita, vel molestias fugiat?
        </About>
      </Content>
    </Container>
  );
}
