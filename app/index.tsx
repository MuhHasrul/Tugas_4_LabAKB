import { ScrollView, StyleSheet, Text } from "react-native";
import NamaList from "../components/NamaList";

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tugas 4</Text>
      <Text style={styles.caption}>By MUH HASRUL - 105841114922</Text>
      <NamaList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#229411",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 6,
  },
  caption: {
    fontSize: 14,
    textAlign: "center",
    color: "#11ffff",
    marginBottom: 20,
  },
});
