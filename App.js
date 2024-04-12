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
    console.log("limpar" + celsius);
    setTemperatura("");
    console.log("limpar" + temperatura);
  };

  return (
    <View style={styles.container}>
      <TextComp />
      <InputComp graus={setCelsius} value={celsius} />

      {/*Botão para executar o cálculo */}
      <Pressable onPress={calcTemp}>
        <Text>Converter Temperatura</Text>
      </Pressable>
      {/* Resultado */}
      <Text>{`Em fahrenheit são ${temperatura} graus`}</Text>

      {/* Botão para limpar os valores e calcular de novo. */}
      <TouchableOpacity onPress={calcularNovamente}>
        <Text>Calcular Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}
