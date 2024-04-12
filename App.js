import React, { useState } from "react";
import { styles } from "./src/Styles/StyleSheet";
import { Pressable, View, Text, TouchableOpacity } from "react-native";

//Importando Components.
import TextComp from "./src/TextComponent";
import InputComp from "./src/InputComponent";

export default function App() {
  //Definindo Constantes.
  const [celsius, setCelsius] = useState("");
  const [temperatura, setTemperatura] = useState("");

  //Cálculo para converter as temperaturas.
  const calcTemp = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    setTemperatura(fahrenheit);
  };

  //Zerar os valores para calcular de novo.
  const calcularNovamente = () => {
    setCelsius("");
    setTemperatura("");
  };

  return (
    <View style={styles.container}>
      <TextComp txt="Calculadora de Graus Celsius para Fahrenheit" styles={styles.text}/>
      <InputComp graus={setCelsius} value={celsius} />

      {/*Botão para executar o cálculo */}
      <Pressable style={styles.btn} onPress={calcTemp}>
        <Text>Converter Temperatura</Text>
      </Pressable>
      {/* Resultado */}
      <Text style={styles.result}>
        {`Em fahrenheit são ${temperatura} graus`}
      </Text>

      {/* Botão para limpar os valores e calcular de novo. */}
      <TouchableOpacity style={styles.btn} onPress={calcularNovamente}>
        <Text>Calcular Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}
