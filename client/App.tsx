/**
 * StockEnCasa — entrypoint del cliente móvil.
 *
 * Placeholder de Entrega 1: el árbol de navegación, pantallas y servicios se implementan en
 * Entrega 2. Este componente existe únicamente para que el proyecto compile y para validar la
 * estructura del repositorio.
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StockEnCasa</Text>
      <Text style={styles.subtitle}>Entrega 1 — estructura base del proyecto</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5B7A68',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#5B7A68',
    opacity: 0.8,
  },
});
