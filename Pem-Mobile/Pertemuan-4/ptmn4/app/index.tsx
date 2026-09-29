import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Login</Text>

      <Button
        title="Belum punya akun? Daftar di sini"
        onPress={() => router.push('/signup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});