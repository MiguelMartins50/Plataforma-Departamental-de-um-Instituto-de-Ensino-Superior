import { HeaderHeightContext } from "@react-navigation/stack";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { color } from "react-native-reanimated";
import imagem from "./assets/fundoescolas.png";
import imagemeseb from "./assets/eseb.jpg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class EscolaESEB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}>Escola Superior de Educação</Text>
          <Image source={imagemeseb} style={styles.imagemEseb}></Image>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "#870B5A",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                marginBottom: 50,
              }}
            >
              Diretor
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Image source={user} style={styles.user}></Image>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.informacoes}>Nome:</Text>
                <Text style={styles.informacoes}>Email:</Text>
              </View>
            </View>
            <Text style={styles.texteseb}>
              A Escola Superior de Educação de Bragança (ESEB), integrada no
              Instituto Politécnico de Bragança (IPB).{"/n"}
              Em 1994, em virtude da já então exiguidade das instalações a ESEB,
              deslocou-se para local cedido pela Escola Superior de Tecnologia e
              Gestão enquanto aguardava a conclusão das obras das suas actuais
              instalações.{"/n"}O primeiro Conselho Directivo é eleito em 1996.
              Desde a sua criação que a Escola têm mantido extensos contactos
              com outras instituições de Ensino Superior vocacionadas para a
              formação de professores, tendo nomeadamente no âmbito do programa
              Erasmus contribuido para a mobilidade de docentes e discentes
              entre a E.S.E.B. e as diversas Universidades Europeias com que
              este estabelecimento colabora.
            </Text>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Editar"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("EditarESEB")}
            ></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  imagemEseb: {
    flex: 5,
    marginTop: 20,
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  texteseb: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "justify",
    backgroundColor: "transparent",
    marginBottom: 150,
    marginRight: 10,
    marginLeft: 10,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  user: {
    resizeMode: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 80,
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    textAlign: "center",
    width: 50,
    height: 50,
    marginLeft: 50,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 20,
    justifyContent: "center",
    marginRight: 20,
  },
});
