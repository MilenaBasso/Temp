import { TextInput } from "react-native";
import { styles } from "./Styles/StyleSheet";


//Exportando componente e definindo Props
export default function InputComp({ graus, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Temperatura em Celsius"
      keyboardType="numeric"
      onChangeText={graus}
      value={value}
    />
  );
}
