import { StyleSheet, Text, View } from "react-native";

interface Props {
  nama: string;
  font: string;
}

export default function NamaItem({ nama, font }: Props) {
  return (
    <View style={styles.card}>
      <Text style={[styles.nama, { fontFamily: font }]}>{nama}</Text>
      <Text style={styles.infoFont}>Font: {font}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 18,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "red",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  nama: {
    fontSize: 20,
    color: "#3B060A",
  },
  infoFont: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
});
