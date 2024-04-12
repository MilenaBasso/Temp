import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  //Estilização do Titulo
  text: {
    fontSize: 30,
    color: "yellow",
    textAlign: "center",
    justifyContent: "center",
  },

  //Estilização da caixa de texto
  input: {
    borderWidth: 2,
    fontSize: 20,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  //Estilização dos botões
  btn: {
    borderWidth: 2,
    backgroundColor: "yellow",
    borderColor: "yellow",
    marginBottom: "200",
    alignItems: "center",
    justifyContent: "center",
  },

  //Estilização do texto de resposta
  result: {
    fontSize: 20,
    fontColor: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});
