import { useLayoutEffect } from 'react';
import { useNavigation, type StaticScreenProps } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppSelector } from '../../lib/hooks/useAppSelector';
import FormContainer, { FormContainerInner } from '../../containers/FormContainer';
import * as HeaderButton from '../../containers/Header/components/HeaderButton';
import LoginServices from '../../containers/LoginServices';
import { type OutsideParamList } from '../../stacks/types';
import UserForm from './UserForm';
import BrandHeader from '../../components/BrandHeader';
import { ICE_LASER_BRAND } from '../../lib/constants/brand';

type LoginViewProps = StaticScreenProps<{ title: string; username?: string }>;

const LoginView = ({ route }: LoginViewProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<OutsideParamList, 'LoginView'>>();

	const {
		params: { title }
	} = route;

	const { Accounts_ShowFormLogin } = useAppSelector(state => ({
		Accounts_ShowFormLogin: state.settings.Accounts_ShowFormLogin as boolean
	}));

	useLayoutEffect(() => {
		navigation.setOptions({
			title: title ?? ICE_LASER_BRAND.displayName,
			headerRight: () => <HeaderButton.Legal testID='login-view-more' navigation={navigation} />
		});
	}, [navigation, title]);

	return (
		<FormContainer testID='login-view'>
			<FormContainerInner>
				<BrandHeader compact subtitle='Acesso da equipe' />
				<LoginServices separator={Accounts_ShowFormLogin} />
				{Accounts_ShowFormLogin ? <UserForm /> : null}
			</FormContainerInner>
		</FormContainer>
	);
};

export default LoginView;
