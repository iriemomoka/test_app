import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBer from './src/components/AppBer';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>

      <AppBer />
      <MemoList />
      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4fb',
  },
});
