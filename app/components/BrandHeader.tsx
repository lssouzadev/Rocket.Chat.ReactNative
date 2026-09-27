import { StyleSheet, Text, View } from 'react-native';

import BrandMark from './BrandMark';
import { ICE_LASER_BRAND } from '../lib/constants/brand';
import { useTheme } from '../theme';

interface IBrandHeaderProps {
	compact?: boolean;
	subtitle?: string;
}

const BrandHeader = ({ compact = false, subtitle = ICE_LASER_BRAND.internalSubtitle }: IBrandHeaderProps) => {
	const { colors } = useTheme();

	return (
		<View style={[styles.container, compact && styles.containerCompact]}>
			<BrandMark size={compact ? 64 : 92} />
			<View style={styles.wordmark}>
				<Text style={[styles.eyebrow, { color: ICE_LASER_BRAND.colors.copper }]}>{ICE_LASER_BRAND.wordmarkEyebrow}</Text>
				<Text style={[styles.name, compact && styles.nameCompact, { color: colors.fontTitlesLabels }]}>
					{ICE_LASER_BRAND.wordmarkName}
				</Text>
				{subtitle ? <Text style={[styles.subtitle, { color: colors.fontSecondaryInfo }]}>{subtitle}</Text> : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { alignItems: 'center', gap: 4, marginBottom: 28 },
	containerCompact: { marginBottom: 20 },
	wordmark: { alignItems: 'center' },
	eyebrow: { fontSize: 11, fontWeight: '700', letterSpacing: 4.5 },
	name: { fontSize: 34, fontWeight: '700', letterSpacing: -1.2 },
	nameCompact: { fontSize: 28 },
	subtitle: { fontSize: 13, marginTop: 4 }
});

export default BrandHeader;
