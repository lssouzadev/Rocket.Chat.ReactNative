import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { ICE_LASER_BRAND } from '../lib/constants/brand';

interface IBrandMarkProps {
	size?: number;
}

const BrandMark = ({ size = 88 }: IBrandMarkProps) => (
	<Svg width={size} height={size} viewBox='0 0 108 108' accessibilityRole='image' accessibilityLabel='Ice Laser'>
		<Defs>
			<LinearGradient id='iceLaserBrandGradient' x1='0' y1='0' x2='1' y2='0'>
				<Stop offset='0' stopColor={ICE_LASER_BRAND.colors.peach} />
				<Stop offset='1' stopColor={ICE_LASER_BRAND.colors.copper} />
			</LinearGradient>
		</Defs>
		<Circle cx='54' cy='54' r='38' fill='url(#iceLaserBrandGradient)' />
		<Path d='M40 29H51V79H40Z' fill={ICE_LASER_BRAND.colors.black} />
		<Path d='M59 29H70V67H89V79H59Z' fill={ICE_LASER_BRAND.colors.black} />
	</Svg>
);

export default BrandMark;
