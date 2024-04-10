import React, { useState } from "react";
import { View } from "react-native";

//Importando Components.
import TextComp from "./src/TextComponent";
import InputComp from "./src/InputComponent";
import { useState } from "react";

export default function App() {
  //Definindo Constantes.
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  //Cálculo para converter as temperaturas.
  const calcTemp = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    setFahrenheit;
  };

  //Zerar os valores para calcular de novo.
  const calcularNovamente = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <View style={styles.container}>
      <TextComp />
      <InputComp />
    </View>
  );
}
