import { Text, View } from "react-native";
import { styles } from "./Styles/StyleSheet";

export default function TextComp({txt, styles}) {
  return (
      <Text style={styles} >{txt}</Text>
        
      
  );
}
