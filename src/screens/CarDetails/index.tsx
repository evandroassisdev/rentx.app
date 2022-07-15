import { BackButton } from '@src/components/BackButton';
import { ImageSlider } from '@src/components/ImageSlider';
import React from 'react';

import { CarImages, Container, Header } from './styles';

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
    </Container>
  );
}
