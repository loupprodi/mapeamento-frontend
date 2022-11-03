import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const backgroundImage = require("../../assets/imgs/background2.png");

export default function MainScreen<Function>() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Text>Logado com sucesso!</Text>
      <StatusBar style="auto" />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
