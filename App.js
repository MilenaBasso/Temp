import React, { useState } from "react";
import { styles } from "./src/Styles/StyleSheet";
import { Pressable, View, Text } from "react-native";

//Importando Components.
import TextComp from "./src/TextComponent";
import InputComp from "./src/InputComponent";

export default function App() {
  //Definindo Constantes.
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  //Cálculo para converter as temperaturas.
  const calcTemp = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    setFahrenheit(fahrenheit);
  };

  //Zerar os valores para calcular de novo.
  const calcularNovamente = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <View style={styles.container}>
      <TextComp />
      <InputComp graus={celsius} />
      <Pressable onPress={calcularNovamente}>
        <Text>Calcular Novamente</Text>
      </Pressable>
      ;
    </View>
  );
}
