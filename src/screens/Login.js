import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { Button } from 'react-native-paper';

import { useSetRecoilState } from 'recoil';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { userState } from '../recoil/atoms/auth';
import LoginApi from '../api/login';

const loginApi = new LoginApi();

export default function LoginScreen() {
  const setUser = useSetRecoilState(userState);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);

  const login = async () => {
    try {
      // const data = await loginApi.login(username, password);
      const data = {
        access_token: 'logado',
        refresh_token: 'refresh logado',
      }
      setUser({
        loggedIn: true,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      await SecureStore.setItemAsync('access_token', data.access_token);
    } catch (error) {
      setUser({ loggedIn: false, access_token: null, refresh_token: null });
      setErrorMsg('Usuário ou senha inválidos!');
      await SecureStore.deleteItemAsync('access_token');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button style={styles.button} textColor={'white'} onPress={() => login()}> Sign in </Button>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 150,
    padding: 5,
    marginTop: 10,
    borderRadius: 8,
    borderColor: '#12568A',
    borderWidth: 2,
  },
  button: {
    backgroundColor: "#12568A",
    width: 150,
    padding: 5,
    marginTop: 15,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
});
