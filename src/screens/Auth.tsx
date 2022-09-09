import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import {
	ImageBackground,
	Image,
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacityBase,
	TouchableOpacity,
	Alert,
} from 'react-native';
import MainScreen from './MainScreen';
import AuthInput from '../components/AuthInput';
import { showError, showSuccess } from '../common';
import axios from 'axios';

const backgroundImage = require('../../assets/imgs/background2.png');
const logo = require("../../assets/imgs/logo.png");

export default class Auth extends Component {
	state = {
		name: '',
		cpf: undefined,
		phonenumber: undefined,
		email: '',
		password: '',
		confirmPassword: '',
		stageNew: true,
	};

	signinOrSignup = () => {
		if (this.state.stageNew) {
			this.signup();
		} else {
			this.signin();
		}
	};

	signup = async () => {
		try {
			if (this.state.password.length < 8) {
				showError('A senha precisa ter pelo menos 8 caracteres.')
				return;
			} else if (this.state.password !== this.state.confirmPassword) {
				showError('Senhas não coincidem.');
				return;
			} else
				this.state.name,
				this.state.cpf,
				this.state.phonenumber,
				this.state.email,
				this.state.password,
			
				/* await axios.post(`${process.env.API_URL}/users`, {
					name: this.state.name,
					cpf: this.state.cpf,
					phonenumber: this.state.phonenumber,
					email: this.state.email,
					password: this.state.password,
				}); */

			showSuccess('Usuário cadastrado.');
			this.setState({ stageNew: false });
		} catch (e) {
			showError(e);
		}
	};

	signin = async () => {
		try {
			this.state.email,
			this.state.password,
			/* await axios.post(`${process.env.API_URL}/sign-in`, {
						email: this.state.email,
						password: this.state.password,
				  }); */

			this.props.navigation.navigate('MainScreen');
		} catch (e) {
			showError(e);
		}
	};

	render(): React.ReactNode {
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Image source={logo} style={styles.logo}/>
				<Text style={styles.title}>YSW</Text>
				<Text style={styles.subtitle}>Seu caminho mais seguro</Text>
				<View style={styles.formContainer}>
					<Text style={styles.subtitle}>
						{this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
					</Text>
					{this.state.stageNew && (
						<AuthInput
							icon='account'
							placeholder='Nome'
							value={this.state.name}
							style={styles.input}
							onChangeText={(name: String) => this.setState({ name })}
						/>
					)}
					{this.state.stageNew && (
						<AuthInput
							icon='card-account-details-outline'
							placeholder='CPF'
							value={this.state.cpf}
							style={styles.input}
							onChangeText={(cpf: Number) => this.setState({ cpf })}
						/>
					)}
					{this.state.stageNew && (
						<AuthInput
							icon='phone'
							placeholder='Telefone'
							value={this.state.phonenumber}
							style={styles.input}
							onChangeText={(phonenumber: Number) => this.setState({ phonenumber })}
						/>
					)}
					<AuthInput
						icon='at'
						placeholder='E-mail'
						value={this.state.email}
						style={styles.input}
						onChangeText={(email: String) => this.setState({ email })}
					/>
					<AuthInput
						icon='lock'
						placeholder='Senha'
						value={this.state.password}
						style={styles.input}
						onChangeText={(password: String) => this.setState({ password })}
						secureTextEntry={true}
					/>
					{this.state.stageNew && (
						<AuthInput
							icon='lock-alert'
							placeholder='Confirmação de Senha'
							value={this.state.confirmPassword}
							style={styles.input}
							secureTextEntry={true}
							onChangeText={(confirmPassword: String) =>
								this.setState({ confirmPassword })
							}
						/>
					)}
					<TouchableOpacity onPress={this.signinOrSignup}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								{this.state.stageNew ? 'Registrar' : 'Entrar'}
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ padding: 10 }}
						onPress={() => this.setState({ stageNew: !this.state.stageNew })}
					>
						<Text style={styles.linkSignInOrLoginIn}>
							{this.state.stageNew
								? 'Já possui uma conta?'
								: 'Ainda não possui uma conta?'}
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logo: {
		width: '40%',
		height: '20%',
		borderRadius: 10,
		opacity: 0.8,
		marginTop: 20,
	},

	title: {
		fontSize: 32,
		marginBottom: 8,
		fontFamily: 'Roboto',
		fontWeight: '600',
		color: '#585858',
	},
	subtitle: {
		fontSize: 13,
		marginBottom: 10,
		fontFamily: 'Roboto',
		fontWeight: "400",
		color: '#585858',
		textAlign: 'center',
	},
	formContainer: {
		padding: 20,
		width: '90%',
		borderRadius: 10,
	},
	input: {
		padding: 10,
		marginTop: 10,
		backgroundColor: 'white',
		borderRadius: 6,
		fontSize: 20,
	},
	button: {
		backgroundColor: '#3CB2CA',
		marginTop: 10,
		padding: 10,
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
	},
	linkSignInOrLoginIn: {
		fontSize: 16,
		marginBottom: 10,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		color: '#585858',
		textAlign: 'center',
		textDecorationLine: 'underline',
	},
});
