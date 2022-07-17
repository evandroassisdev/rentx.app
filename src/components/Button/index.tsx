import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  disabled = false,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      disabled={disabled}
      {...rest}
      style={{
        opacity: !disabled ? 1 : 0.5,
      }}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
