import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './page/SearchPage';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchPage />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex : 1
  },
});
