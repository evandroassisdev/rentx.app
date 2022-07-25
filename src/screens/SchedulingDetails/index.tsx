import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Accessory } from '@src/components/Accessory';
import { BackButton } from '@src/components/BackButton';
import { Button } from '@src/components/Button';
import { ImageSlider } from '@src/components/ImageSlider';
import { CarDTO } from '@src/dtos/CarDTO';
import { api } from '@src/services/api';
import { getAccessoryIcon } from '@src/utils/getAccessoryIcon';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

interface Params {
  car: CarDTO;
  dates: string[];
}

interface IRentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>(
    {} as IRentalPeriod
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  async function handleConfirmRental() {
    setLoading(true);

    const schedulesByCar = await api.get(`schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: rentalPeriod.start,
      endDate: rentalPeriod.end,
    });

    api
      .put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() =>
        navigation.navigate('Confirmation', {
          nextScreenRoute: 'Home',
          title: 'Carro alugado!',
          message: `Agora você só precisar ir\naté a concessionária da RENTX\npegar seu automóvel.`,
        })
      )
      .catch(() => {
        setLoading(false);
        Alert.alert('Não foi possível confirmar o agendamento.');
      });
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(new Date(dates[0]), 'dd/MM/yyyy'),
      end: format(new Date(dates[dates.length - 1]), 'dd/MM/yyyy'),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
          disabled={loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
}
