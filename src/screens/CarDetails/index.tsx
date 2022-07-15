import AccelerationSvg from '@src/assets/acceleration.svg';
import ExchangeSvg from '@src/assets/exchange.svg';
import ForceSvg from '@src/assets/force.svg';
import GasolineSvg from '@src/assets/gasoline.svg';
import PeopleSvg from '@src/assets/people.svg';
import SpeedSvg from '@src/assets/speed.svg';
import { Accessory } from '@src/components/Accessory';
import { BackButton } from '@src/components/BackButton';
import { Button } from '@src/components/Button';
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
  Accessories,
  Footer,
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

        <Accessories>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit
          alias rerum corrupti cum et amet quod atque. Dolor molestiae doloribus
          iure laboriosam quos neque debitis expedita, vel molestias fugiat?
        </About>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit
          alias rerum corrupti cum et amet quod atque. Dolor molestiae doloribus
          iure laboriosam quos neque debitis expedita, vel molestias fugiat?
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
