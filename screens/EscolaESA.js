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
import imagemesa from "./assets/agraria.jpg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class EscolaESA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}>Escola Superior Agrária</Text>
          <Image source={imagemesa} style={styles.imagemESA}></Image>
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
            <Text style={styles.textesa}>
              Frequentam a ESA cerca de 1050 alunos, distribuídos pelas diversas
              licenciaturas em funcionamento, utilizando um edifício central com
              10 400 m2 incluindo salas para aulas teóricas, salas de
              informática, espaços laboratoriais para ensino, investigação e
              apoio à comunidade, bibliotecas e outros equipamentos. As
              Tecnologias de Informação e Comunicação (TICs) são uma constante
              no dia a dia de alunos, funcionários e docentes, destacando-se uma
              infra-estrutura de rede sem fios que permite uma mobilidade total
              aos utilizadores dentro do Campus e de Universidades aderentes à
              rede e-U.{"/n"}A ESA está inserida num ambicioso programa de
              cooperação com instituições nacionais e internacionais nos
              domínios de mobilidade de alunos e docentes e apoio a instituições
              congéneres de países de expressão portuguesa.
            </Text>
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
  imagemESA: {
    flex: 1,
    marginTop: 20,
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  textesa: {
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
});
