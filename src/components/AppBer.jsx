import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBer() {
    return (
      <View style={styles.appber}>
        <View style={styles.appberInner}>
          <Text style={styles.appbertitle}>Test App</Text>
          <Text style={styles.appberRight}>ログアウト</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    appber: {
      width: '100%',
      height: 104,
      backgroundColor: '#467fd3',
      justifyContent: 'flex-end',
    },
    appberInner: {
      alignItems: 'center',
    },
    appberRight: {
      position: 'absolute',
      right: 19,
      bottom: 12,
      color: 'rgba(255,255,255,0.8)',
    },
    appbertitle: {
      marginBottom: 8,
      fontSize: 22,
      lineHeight: 32,
      color: '#ffffff',
      fontWeight: 'bold',
    },
});
