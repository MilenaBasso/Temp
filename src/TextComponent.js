import { Text, View } from "react-native";
import { styles } from "./Styles/StyleSheet";

export default function TextComp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Calculadora de Graus Celsius para Fahrenheit
      </Text>
    </View>
  );
}
