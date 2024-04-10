import { TextInput } from "react-native";
import { styles } from "./Styles/StyleSheet";

export default function InputComp({ graus }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Temperatura em Celsius"
      value={graus}
    />
  );
}
