import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import AuthInput from "../components/AuthInput";
import { showError, showSuccess } from "../common";
// import axios from "axios";

import api from "../../services/api";

const backgroundImage = require("../../assets/imgs/background2.png");
const logo = require("../../assets/imgs/logo.png");

export const Auth = () => {
  const navigation = useNavigation();
  const [authState, setAuthState] = useState({
    name: "",
    cpf: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    stageNew: true,
  });

  const signinOrSignup = () => {
    if (authState.stageNew) {
      signup();
    } else {
      signin();
    }
  };

  const signup = async () => {
    try {
      if (authState.password.length < 8) {
        showError("A senha precisa ter pelo menos 8 caracteres.");
        return;
      } else if (authState.password !== authState.confirmPassword) {
        showError("Senhas não coincidem.");
        return;
      } else
        authState.name,
          authState.cpf,
          authState.phonenumber,
          authState.email,
          authState.password,
          /* await axios.post(`${process.env.API_URL}/users`, {
						name: this.state.name,
						cpf: this.state.cpf,
						phonenumber: this.state.phonenumber,
						email: this.state.email,
						password: this.state.password,
					}); */

          showSuccess("Usuário cadastrado.");
      setAuthState({ ...authState, stageNew: false });
    } catch (e) {
      showError(e);
    }
  };

  const signin = async () => {
    try {
      authState.email,
        authState.password,
        /* await axios.post(`${process.env.API_URL}/sign-in`, {
							email: this.state.email,
							password: this.state.password,
					  }); */

        navigation.navigate("MainScreen",{});
    } catch (e) {
      showError(e);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>YSW</Text>
      <Text style={styles.subtitle}>Seu caminho mais seguro</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          {authState.stageNew ? "Crie a sua conta" : "Informe seus dados"}
        </Text>
        {authState.stageNew && (
          <AuthInput
            icon="account"
            placeholder="Nome"
            value={authState.name}
            style={styles.input}
            onChangeText={(name: string) =>
              setAuthState({ ...authState, name })
            }
          />
        )}
        {authState.stageNew && (
          <AuthInput
            icon="card-account-details-outline"
            placeholder="CPF"
            value={authState.cpf}
            style={styles.input}
            onChangeText={(cpf: string) => setAuthState({ ...authState, cpf })}
          />
        )}
        {authState.stageNew && (
          <AuthInput
            icon="phone"
            placeholder="Telefone"
            value={authState.phonenumber}
            style={styles.input}
            onChangeText={(phonenumber: string) =>
              setAuthState({ ...authState, phonenumber })
            }
          />
        )}
        <AuthInput
          icon="at"
          placeholder="E-mail"
          value={authState.email}
          style={styles.input}
          onChangeText={(email: string) =>
            setAuthState({ ...authState, email: email })
          }
        />
        <AuthInput
          icon="lock"
          placeholder="Senha"
          value={authState.password}
          style={styles.input}
          onChangeText={(password: string) =>
            setAuthState({ ...authState, password })
          }
          secureTextEntry={true}
        />
        {authState.stageNew && (
          <AuthInput
            icon="lock-alert"
            placeholder="Confirmação de Senha"
            value={authState.confirmPassword}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(confirmPassword: string) =>
              setAuthState({ ...authState, confirmPassword })
            }
          />
        )}
        <TouchableOpacity onPress={signinOrSignup}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {authState.stageNew ? "Registrar" : "Entrar"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() =>
            setAuthState({ ...authState, stageNew: !authState.stageNew })
          }
        >
          <Text style={styles.linkSignInOrLoginIn}>
            {authState.stageNew
              ? "Já possui uma conta?"
              : "Ainda não possui uma conta?"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "40%",
    height: "20%",
    borderRadius: 10,
    opacity: 0.8,
    marginTop: 20,
  },

  title: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "#585858",
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#585858",
    textAlign: "center",
  },
  formContainer: {
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  input: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 6,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#3CB2CA",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  linkSignInOrLoginIn: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#585858",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
