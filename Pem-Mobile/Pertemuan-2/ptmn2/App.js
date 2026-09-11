import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap: Nurkhotimah</Text>
      <Text>Tempat Tanggal Lahir: Kuningan, 17 Agustus 2005</Text>
      <Text>Cita-Cita: Web Developer</Text>
      <Text>Rencana Hidup: menjadi Web Developer yang berkontribusi positif dalam dunia teknologi</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
