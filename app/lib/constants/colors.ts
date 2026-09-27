import { ICE_LASER_BRAND } from './brand';

const backdropColor = '#000000';
const overlayBackground = 'rgba(31, 35, 41, 0.65)';

const light = {
	surfaceLight: '#FFFFFF',
	surfaceTint: ICE_LASER_BRAND.colors.warmTint,
	surfaceRoom: '#FFFFFF',
	surfaceNeutral: '#E4E7EA',
	surfaceDisabled: '#F7F8FA',
	surfaceHover: '#F2F3F5',
	surfaceSelected: '#D7DBE0',
	surfaceDark: '#1F2329',
	surfaceFeatured: ICE_LASER_BRAND.colors.copper,
	surfaceFeaturedHover: ICE_LASER_BRAND.colors.copperDark,

	strokeExtraLight: '#EBECEF',
	strokeLight: '#CBCED1',
	strokeMedium: '#9EA2A8',
	strokeDark: '#6C727A',
	strokeExtraDark: '#2F343D',
	strokeExtraLightHighlight: ICE_LASER_BRAND.colors.warmHighlight,
	strokeHighlight: ICE_LASER_BRAND.colors.copper,
	strokeExtraLightError: '#FFC1C9',
	strokeError: '#EC0D2A',

	fontWhite: '#FFFFFF',
	fontDisabled: '#CBCED1',
	fontAnnotation: '#9EA2A8',
	fontHint: '#6C727A',
	fontSecondaryInfo: '#6C727A',
	fontDefault: '#2F343D',
	fontTitlesLabels: '#1F2329',
	fontInfo: ICE_LASER_BRAND.colors.copperDark,
	fontDanger: '#D40C26',
	fontPureBlack: '#2F343D',
	fontPureWhite: '#FFFFFF',

	statusBackgroundInfo: '#D1EBFE',
	statusBackgroundSuccess: '#C0F6E4',
	statusBackgroundDanger: '#FFC1C9',
	statusBackgroundWarning: '#FFECAD',
	statusBackgroundWarning2: '#FFF6D6',
	statusBackgroundService: '#FAD1B0',
	statusBackgroundService2: '#EDD0F7',
	statusFontInfo: '#095AD2',
	statusFontSuccess: '#148660',
	statusFontDanger: '#9B1325',
	statusFontWarning: '#8E6300',
	statusFontWarning2: '#2F343D',
	statusFontService: '#974809',
	statusFontService2: '#7F1B9F',

	badgeBackgroundLevel1: '#6C727A',
	badgeBackgroundLevel2: ICE_LASER_BRAND.colors.copper,
	badgeBackgroundLevel3: '#F38C39',
	badgeBackgroundLevel4: '#F5455C',

	userPresenceOnline: '#158D65',
	userPresenceBusy: '#D40C26',
	userPresenceAway: '#AC892F',
	userPresenceOffline: '#6C727A',
	userPresenceDisabled: '#F38C39',

	buttonBackgroundPrimaryDefault: ICE_LASER_BRAND.colors.copper,
	buttonBackgroundPrimaryPress: ICE_LASER_BRAND.colors.copperDark,
	buttonBackgroundPrimaryDisabled: ICE_LASER_BRAND.colors.warmDisabled,

	buttonBackgroundSecondaryDefault: '#E4E7EA',
	buttonBackgroundSecondaryPress: '#9EA2A8',
	buttonBackgroundSecondaryDisabled: '#EEEFF1',

	buttonBackgroundSecondaryDangerDefault: '#E4E7EA',
	buttonBackgroundSecondaryDangerPress: '#9EA2A8',
	buttonBackgroundSecondaryDangerDisabled: '#EEEFF1',

	buttonBackgroundDangerDefault: '#EC0D2A',
	buttonBackgroundDangerPress: '#BB0B21',
	buttonBackgroundDangerDisabled: '#FFC1C9',

	buttonBackgroundSuccessDefault: '#158D65',
	buttonBackgroundSuccessPress: '#0D5940',
	buttonBackgroundSuccessDisabled: '#C0F6E4',

	buttonFontPrimary: ICE_LASER_BRAND.colors.black,
	buttonPrimaryDisabled: '#FFFFFF',
	buttonFontSecondary: '#1F2329',
	buttonSecondaryDisabled: '#CBCED1',
	buttonFontSecondaryDanger: '#BB0B21',
	buttonSecondaryDangerDisabled: '#F98F9D',
	buttonFontDanger: '#FFFFFF',
	buttonDangerDisabled: '#FFFFFF',
	buttonFontSuccess: '#FFFFFF',
	buttonSuccessDisabled: '#FFFFFF'
};

const dark = {
	surfaceLight: '#262931',
	surfaceTint: '#1F2329',
	surfaceRoom: '#1F2329',
	surfaceNeutral: '#2D3039',
	surfaceDisabled: '#24272E',
	surfaceHover: '#1A1E23',
	surfaceSelected: '#3C3F44',
	surfaceDark: '#E4E7EA',
	surfaceFeatured: ICE_LASER_BRAND.colors.copper,
	surfaceFeaturedHover: ICE_LASER_BRAND.colors.copperDark,

	strokeExtraLight: '#2F343D',
	strokeLight: '#333842',
	strokeMedium: '#404754',
	strokeDark: '#1F2329',
	strokeExtraDark: '#CBCED1',
	strokeExtraLightHighlight: '#87CBFC',
	strokeHighlight: ICE_LASER_BRAND.colors.peach,
	strokeExtraLightError: '#F49AA6',
	strokeError: '#BB3E4E',

	fontWhite: '#FFFFFF',
	fontDisabled: '#60646C',
	fontAnnotation: '#9EA2A8',
	fontHint: '#9EA2A8',
	fontSecondaryInfo: '#9EA2A8',
	fontDefault: '#C1C7D0',
	fontTitlesLabels: '#F2F3F5',
	fontInfo: ICE_LASER_BRAND.colors.peach,
	fontDanger: '#CF6E7A',
	fontPureBlack: '#2F343D',
	fontPureWhite: '#FFFFFF',

	statusBackgroundInfo: '#A8C3EB',
	statusBackgroundSuccess: '#C1EBDD',
	statusBackgroundDanger: '#FFBDC5',
	statusBackgroundWarning: '#FEEFBE',
	statusBackgroundWarning2: '#4E4731',
	statusBackgroundService: '#FCE3CF',
	statusBackgroundService2: '#EDD0F7',
	statusFontInfo: '#739EDE',
	statusFontSuccess: '#58AD90',
	statusFontDanger: '#D88892',
	statusFontWarning: '#C7AA66',
	statusFontWarning2: '#FFFFFF',
	statusFontService: '#CA9163',
	statusFontService2: '#C393D2',

	badgeBackgroundLevel1: '#484C51',
	badgeBackgroundLevel2: ICE_LASER_BRAND.colors.copper,
	badgeBackgroundLevel3: '#955828',
	badgeBackgroundLevel4: '#B43C4C',

	userPresenceOnline: '#1CBF89',
	userPresenceBusy: '#C75765',
	userPresenceAway: '#AC892F',
	userPresenceOffline: '#6C727A',
	userPresenceDisabled: '#955828',

	buttonBackgroundPrimaryDefault: ICE_LASER_BRAND.colors.copper,
	buttonBackgroundPrimaryPress: ICE_LASER_BRAND.colors.copperDark,
	buttonBackgroundPrimaryDisabled: ICE_LASER_BRAND.colors.copperDeep,

	buttonBackgroundSecondaryDefault: '#353B45',
	buttonBackgroundSecondaryPress: '#454C59',
	buttonBackgroundSecondaryDisabled: '#2F343D',

	buttonBackgroundSecondaryDangerDefault: '#2F343D',
	buttonBackgroundSecondaryDangerPress: '#454C59',
	buttonBackgroundSecondaryDangerDisabled: '#2F343D',

	buttonBackgroundDangerDefault: '#BB3E4E',
	buttonBackgroundDangerPress: '#822C37',
	buttonBackgroundDangerDisabled: '#3D2126',

	buttonBackgroundSuccessDefault: '#1D7256',
	buttonBackgroundSuccessPress: '#134937',
	buttonBackgroundSuccessDisabled: '#1E4B40',

	buttonFontPrimary: ICE_LASER_BRAND.colors.black,
	buttonPrimaryDisabled: '#6C727A',
	buttonFontSecondary: '#E4E7EA',
	buttonSecondaryDisabled: '#6C727A',
	buttonFontSecondaryDanger: '#C14454',
	buttonSecondaryDangerDisabled: '#613339',
	buttonFontDanger: '#FFFFFF',
	buttonDangerDisabled: '#757575',
	buttonFontSuccess: '#FFFFFF',
	buttonSuccessDisabled: '#757575'
};

const black = {
	surfaceLight: '#0d0d0d',
	surfaceTint: '#16181a',
	surfaceRoom: '#000000',
	surfaceNeutral: '#16181a',
	surfaceDisabled: '#24272E',
	surfaceHover: '#080808',
	surfaceSelected: '#3C3F44',
	surfaceDark: '#E4E7EA',
	surfaceFeatured: ICE_LASER_BRAND.colors.copper,
	surfaceFeaturedHover: ICE_LASER_BRAND.colors.copperDark,

	strokeExtraLight: '#2F343D',
	strokeLight: '#1f2329',
	strokeMedium: '#404754',
	strokeDark: '#1F2329',
	strokeExtraDark: '#CBCED1',
	strokeExtraLightHighlight: '#87CBFC',
	strokeHighlight: ICE_LASER_BRAND.colors.peach,
	strokeExtraLightError: '#F49AA6',
	strokeError: '#BB3E4E',

	fontWhite: '#FFFFFF',
	fontDisabled: '#60646C',
	fontAnnotation: '#9EA2A8',
	fontHint: '#9EA2A8',
	fontSecondaryInfo: '#9EA2A8',
	fontDefault: '#E4E7EA',
	fontTitlesLabels: '#F2F3F5',
	fontInfo: ICE_LASER_BRAND.colors.peach,
	fontDanger: '#CF6E7A',
	fontPureBlack: '#2F343D',
	fontPureWhite: '#FFFFFF',

	statusBackgroundInfo: '#A8C3EB',
	statusBackgroundSuccess: '#C1EBDD',
	statusBackgroundDanger: '#FFBDC5',
	statusBackgroundWarning: '#FEEFBE',
	statusBackgroundWarning2: '#4E4731',
	statusBackgroundService: '#FCE3CF',
	statusBackgroundService2: '#EDD0F7',
	statusFontInfo: '#739EDE',
	statusFontSuccess: '#58AD90',
	statusFontDanger: '#D88892',
	statusFontWarning: '#C7AA66',
	statusFontWarning2: '#FFFFFF',
	statusFontService: '#CA9163',
	statusFontService2: '#C393D2',

	badgeBackgroundLevel1: '#484C51',
	badgeBackgroundLevel2: ICE_LASER_BRAND.colors.copper,
	badgeBackgroundLevel3: '#955828',
	badgeBackgroundLevel4: '#B43C4C',

	userPresenceOnline: '#1CBF89',
	userPresenceBusy: '#C75765',
	userPresenceAway: '#AC892F',
	userPresenceOffline: '#6C727A',
	userPresenceDisabled: '#955828',

	buttonBackgroundPrimaryDefault: ICE_LASER_BRAND.colors.copper,
	buttonBackgroundPrimaryPress: ICE_LASER_BRAND.colors.copperDark,
	buttonBackgroundPrimaryDisabled: ICE_LASER_BRAND.colors.copperDeep,

	buttonBackgroundSecondaryDefault: '#353B45',
	buttonBackgroundSecondaryPress: '#454C59',
	buttonBackgroundSecondaryDisabled: '#2F343D',

	buttonBackgroundSecondaryDangerDefault: '#2F343D',
	buttonBackgroundSecondaryDangerPress: '#454C59',
	buttonBackgroundSecondaryDangerDisabled: '#2F343D',

	buttonBackgroundDangerDefault: '#BB3E4E',
	buttonBackgroundDangerPress: '#822C37',
	buttonBackgroundDangerDisabled: '#3D2126',

	buttonBackgroundSuccessDefault: '#1D7256',
	buttonBackgroundSuccessPress: '#134937',
	buttonBackgroundSuccessDisabled: '#1E4B40',

	buttonFontPrimary: ICE_LASER_BRAND.colors.black,
	buttonPrimaryDisabled: '#6C727A',
	buttonFontSecondary: '#E4E7EA',
	buttonSecondaryDisabled: '#6C727A',
	buttonFontSecondaryDanger: '#C14454',
	buttonSecondaryDangerDisabled: '#613339',
	buttonFontDanger: '#FFFFFF',
	buttonDangerDisabled: '#757575',
	buttonFontSuccess: '#FFFFFF',
	buttonSuccessDisabled: '#757575'
};

export const colors = {
	light: {
		...light,
		backdropColor,
		overlayBackground,
		backdropOpacity: 0.3,
		attachmentLoadingOpacity: 0.7
	},
	dark: {
		...dark,
		backdropColor,
		overlayBackground,
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3
	},
	black: {
		...black,
		backdropColor,
		overlayBackground,
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3
	}
};

export const themes = colors;
