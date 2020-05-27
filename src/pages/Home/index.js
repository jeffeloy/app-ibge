import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

import Welcome from "../../components/Welcome";
import SearchController from "../../controllers/SearchController";

import Logo from "../../assets/logo";

export default function Home({ navigation }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.textHeader}>{Welcome()}</Text>
          <TextInput
            placeholder="Digite seu primeiro nome"
            onChangeText={(name) => {
              setName(name);
            }}
            placeholderTextColor="#fff"
            style={styles.input}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Digite o seu ano de nascimento?"
            onChangeText={(year) => {
              setYear(year);
            }}
            placeholderTextColor="#fff"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              SearchController(name, year, navigation);
            }}
          >
            <Text style={styles.buttonText}>Consultar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
