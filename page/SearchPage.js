import { StyleSheet, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import History from '../components/History';
import Highlight from '../components/Highlight';

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <History />
      <Highlight />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});