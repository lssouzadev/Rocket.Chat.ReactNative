import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { type CompositeNavigationProp } from '@react-navigation/core';

import { type OutsideModalParamList, type OutsideParamList } from '../../stacks/types';
import I18n from '../../i18n';
import Button from '../../containers/Button';
import FormContainer, { FormContainerInner } from '../../containers/FormContainer';
import { getShowLoginButton } from '../../selectors/login';
import { useAppSelector } from '../../lib/hooks/useAppSelector';
import RegisterDisabledComponent from './RegisterDisabledComponent';
import BrandHeader from '../../components/BrandHeader';
import { ICE_LASER_BRAND } from '../../lib/constants/brand';

type TNavigation = CompositeNavigationProp<
	NativeStackNavigationProp<OutsideParamList, 'WorkspaceView'>,
	NativeStackNavigationProp<OutsideModalParamList>
>;

const useWorkspaceViewSelector = () =>
	useAppSelector(state => ({
		server: state.server.server,
		registrationForm: state.settings.Accounts_RegistrationForm as string,
		Accounts_iframe_enabled: state.settings.Accounts_iframe_enabled as boolean,
		showLoginButton: getShowLoginButton(state),
		inviteLinkToken: state.inviteLinks.token
	}));

const WorkspaceView = () => {
	const navigation = useNavigation<TNavigation>();
	const { Accounts_iframe_enabled, inviteLinkToken, registrationForm, server, showLoginButton } = useWorkspaceViewSelector();

	useLayoutEffect(() => {
		navigation.setOptions({ title: ICE_LASER_BRAND.displayName });
	}, [navigation]);

	const showRegistrationButton = !!(
		!Accounts_iframe_enabled &&
		(registrationForm === 'Public' || (registrationForm === 'Secret URL' && inviteLinkToken?.length))
	);

	const login = () => {
		if (Accounts_iframe_enabled) {
			navigation.navigate('AuthenticationWebView', { url: server, authType: 'iframe' });
			return;
		}
		navigation.navigate('LoginView', { title: ICE_LASER_BRAND.displayName });
	};

	const register = () => {
		navigation.navigate('RegisterView', { title: ICE_LASER_BRAND.displayName });
	};

	return (
		<FormContainer testID='workspace-view'>
			<FormContainerInner>
				<BrandHeader />
				{showLoginButton ? <Button title={I18n.t('Login')} type='primary' onPress={login} testID='workspace-view-login' /> : null}
				{showRegistrationButton ? (
					<Button title={I18n.t('Create_account')} type='secondary' onPress={register} testID='workspace-view-register' />
				) : (
					<RegisterDisabledComponent />
				)}
			</FormContainerInner>
		</FormContainer>
	);
};

export default WorkspaceView;
