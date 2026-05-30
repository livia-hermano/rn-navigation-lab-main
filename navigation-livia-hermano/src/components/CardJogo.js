import { Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo() {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Titulo</Text>
      <Text style={styles.text}>Genero</Text>
      <Text style={styles.text}>Plataforma</Text>
      <Text style={styles.text}>Nota</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgorundColor: "#ffff".
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2c2e39",
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 10,
  }
})
