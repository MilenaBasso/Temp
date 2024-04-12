import React, { useState } from "react";
import { styles } from "./src/Styles/StyleSheet";
import { Pressable, View, Text } from "react-native";

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
    temperatura("");
  };

  return (
    <View style={styles.container}>
      <TextComp />
      <InputComp graus={setCelsius} />
      <Pressable onPress={calcTemp}>
        <Text>Converter Temperatura</Text>
      </Pressable>
      <Text>{`Em fahrenheit são ${temperatura} graus`}</Text>
      <Pressable onPress={() => calcularNovamente()}>
        <Text>Calcular Novamente</Text>
      </Pressable>
    </View>
  );
}
