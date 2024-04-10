import { TextInput, View } from "react-native";

export default function InputComp({ celsius }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Digite a Temperatura em Celsius" />
    </View>
  );
}
