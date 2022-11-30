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

export default function RegisterTag() {
  const navigation = useNavigation();
  const [tagState, setTagState] = useState({
    id: "",
    name: "",
    localization: "",
    serialNumber: "",
  });

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.TopBar}>
        <View style={styles.BackContent}>
          <Icon name="arrow-left" size={20} color="#000" />
          <Text style={styles.BackText}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro de Tags</Text>

      <View style={styles.structuresForm}>
        <AuthInput
          placeholder="Tag ID"
          value={tagState.id}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />
        <AuthInput
          placeholder="Nome"
          value={tagState.name}
          style={styles.input}
          onChangeText={(name: string) => console.log(name)}
        />

        <AuthInput
          placeholder="Localização"
          value={tagState.localization}
          style={styles.input}
          onChangeText={(cpf: string) => console.log(cpf)}
        />
        <AuthInput
          placeholder="Número Serial"
          value={tagState.serialNumber}
          style={styles.input}
          onChangeText={(cpf: string) => console.log(cpf)}
        />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => console.log("clicou no botão")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{"Registrar"}</Text>
          </View>
        </TouchableOpacity>
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

  title: {
    fontSize: 28,
    /*  marginBottom: 8, */
    fontFamily: "Roboto",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "center",
  },
  structuresForm: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 60,
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
