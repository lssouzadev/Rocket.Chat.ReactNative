import 'react-native-gesture-handler';
import 'react-native-console-time-polyfill';
import { AppRegistry, LogBox, PermissionsAndroid, Platform } from 'react-native';
import RNCallKeep from 'react-native-callkeep';
import DeviceInfo from 'react-native-device-info';

import { name as appName } from './app.json';

if (process.env.USE_STORYBOOK) {
	AppRegistry.registerComponent(appName, () => require('./.rnstorybook/index').default);
} else {
	if (!__DEV__) {
		console.log = () => {};
		console.time = () => {};
		console.timeLog = () => {};
		console.timeEnd = () => {};
		console.warn = () => {};
		console.count = () => {};
		console.countReset = () => {};
		console.error = () => {};
		console.info = () => {};
	}

	LogBox.ignoreAllLogs();

	if (Platform.OS === 'android' && DeviceInfo.hasSystemFeatureSync('android.software.telecom')) {
		const options = {
			android: {
				// TODO: i18n
				alertTitle: 'Permissões necessárias',
				alertDescription: 'Este aplicativo precisa acessar suas contas de chamada',
				cancelButton: 'Cancelar',
				okButton: 'Ok',
				imageName: 'phone_account_icon',
				additionalPermissions: [PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO],
				// Required to get audio in background when using Android 11
				foregroundService: {
					channelId: 'com.espacoicelaser.chat.calls',
					channelName: 'Ice Laser',
					notificationTitle: 'Chamada de voz em andamento'
				},
				selfManaged: true
			}
		};

		RNCallKeep.setup(options)
			.then(() => {
				console.log('RNCallKeep setup successful');
				RNCallKeep.canMakeMultipleCalls(false);
			})
			.catch(error => {
				console.error('Error setting up RNCallKeep:', error);
			});
	}

	AppRegistry.registerComponent(appName, () => require('./app/index').default);
}
