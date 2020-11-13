/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, PermissionsAndroid, Platform, StyleSheet, Text, View, } from 'react-native';

/**
 * 作业：获取 android 定位和相机 权限
 * 暗号：一次学习，随处编写
 */
const App = () => {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);

  // 请求获取 android 权限
  function askForPermissions() {
    const PERMISSIONS = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple(PERMISSIONS).then(results => {
        const allPermissionsGranted = Object.values(results).every(result => result === 'granted');
        if (allPermissionsGranted) {
          setPermissionsGranted(true);
        }
      });
    } else {
      setPermissionsGranted(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragragh}>{permissionsGranted ? '授权成功' : '授权失败'}</Text>
      <Button title="请求授权" onPress={askForPermissions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#ecf0f1',
  },
  paragragh: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
