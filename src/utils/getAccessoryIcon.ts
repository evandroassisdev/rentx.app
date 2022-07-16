import AccelerationSvg from '@src/assets/acceleration.svg';
import CarSvg from '@src/assets/car.svg';
import EnergySvg from '@src/assets/energy.svg';
import ExchangeSvg from '@src/assets/exchange.svg';
import ForceSvg from '@src/assets/force.svg';
import GasolineSvg from '@src/assets/gasoline.svg';
import HybridSvg from '@src/assets/hybrid.svg';
import PeopleSvg from '@src/assets/people.svg';
import SpeedSvg from '@src/assets/speed.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'seats':
      return PeopleSvg;
    default:
      return CarSvg;
  }
}
