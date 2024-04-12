import { Text } from "react-native";


//Exportando componente e definindo Props
export default function TextComp({ txt, styles }) {
  return <Text style={styles}>{txt}</Text>;
}
