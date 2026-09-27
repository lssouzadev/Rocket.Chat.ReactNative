import { getAnalytics as analytics } from '@react-native-firebase/analytics';
import { getCrashlytics as crashlytics } from '@react-native-firebase/crashlytics';
import bugsnag from '@bugsnag/react-native';

import events from './events';

export { events };

let reportCrashErrors = true;
let reportAnalyticsEvents = true;

export const getReportCrashErrorsValue = (): boolean => reportCrashErrors;
export const getReportAnalyticsEventsValue = (): boolean => reportAnalyticsEvents;

bugsnag.start({
	onBreadcrumb() {
		return reportAnalyticsEvents;
	},
	onError(event) {
		if (!reportAnalyticsEvents) {
			event.breadcrumbs = [];
		}
		return reportCrashErrors;
	}
});

let metadata = {};

export const logServerVersion = (serverVersion: string): void => {
	metadata = {
		serverVersion
	};
};

export const logEvent = (eventName: string, payload?: { [key: string]: any }): void => {
	try {
		analytics().logEvent(eventName, payload);
		bugsnag.leaveBreadcrumb(eventName, payload);
	} catch {
		// Do nothing
	}
};

export const setCurrentScreen = (currentScreen: string): void => {
	try {
		analytics().logScreenView({ screen_class: currentScreen, screen_name: currentScreen });
	} catch {
		// Firebase is optional in the first internal white-label build.
	}
	bugsnag.leaveBreadcrumb(currentScreen, { type: 'navigation' });
};

export const toggleCrashErrorsReport = (value: boolean): boolean => {
	try {
		crashlytics().setCrashlyticsCollectionEnabled(value);
	} catch {
		// Firebase is optional in the first internal white-label build.
	}
	return (reportCrashErrors = value);
};

export const toggleAnalyticsEventsReport = (value: boolean): boolean => {
	try {
		analytics().setAnalyticsCollectionEnabled(value);
	} catch {
		// Firebase is optional in the first internal white-label build.
	}
	return (reportAnalyticsEvents = value);
};

const log = (e: any): void => {
	if (e instanceof Error && bugsnag && e.message !== 'Aborted' && !__DEV__) {
		bugsnag.notify(e, (event: { addMetadata: (arg0: string, arg1: {}) => void }) => {
			event.addMetadata('details', { ...metadata });
		});
		try {
			crashlytics().recordError(e);
		} catch {
			// Firebase is optional in the first internal white-label build.
		}
	} else {
		console.error(e);
	}
};
export default log;
