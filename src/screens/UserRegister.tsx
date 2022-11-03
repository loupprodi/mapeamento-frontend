import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

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
import axios from "axios";

const backgroundImage = require("../../assets/imgs/background2.png");
const logo = require("../../assets/imgs/logo.png");

export default function UserRegister() {
  const navigation = useNavigation();
  const [authState, setAuthState] = useState({
    name: "",
    address: "",
    cpf: "",
    birthDate: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    stageNew: true,
  });
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.TopBar}>
        <View style={styles.BackContent}>
          <Icon name="arrow-left" size={20} color="#000" />
          <Text style={styles.BackText}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro do Usuário</Text>

      <View style={styles.formContainer}>
        <AuthInput
          placeholder="Nome"
          value={authState.name}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />
        <AuthInput
          placeholder="Endereço"
          value={authState.address}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />

        <AuthInput
          placeholder="CPF"
          value={authState.cpf}
          style={styles.input}
          onChangeText={(cpf: string) => console.log(cpf)}
        />

        <AuthInput
          placeholder="Data de Nascimento"
          value={authState.birthDate}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />

        <AuthInput
          placeholder="Nome do Responsavel"
          value={authState.birthDate}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />

        <AuthInput
          placeholder="Contato do responsavel"
          value={authState.phonenumber}
          style={styles.input}
          onChangeText={(phonenumber: number) => console.log(phonenumber)}
        />

        <AuthInput
          placeholder="E-mail"
          value={authState.email}
          style={styles.input}
          onChangeText={(email: string) => console.log(email)}
        />
        <AuthInput
          placeholder="Senha"
          value={authState.password}
          style={styles.input}
          onChangeText={(password: string) => console.log(password)}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => console.log("clicou no botão")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{"Registrar"}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.RegisterContent}>
          <Text style={styles.linkSignInOrLoginIn}>
            {"Voce não tem uma conta?"}
          </Text>
          <TouchableOpacity onPress={() => console.log("clicou")}>
            <Text style={styles.RegisterLink}>{" Registrar"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

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
    fontSize: 28,
    /*  marginBottom: 8, */
    fontFamily: "Roboto",
    fontWeight: "600",
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
  RegisterContent: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  linkSignInOrLoginIn: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  RegisterLink: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#3CB2CA",
  },
  TopBar: {
    flexDirection: "row",
  },
  BackContent: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  BackText: {
    fontSize: 24,
    paddingLeft: 10,
    fontFamily: "Roboto",
  },
});
