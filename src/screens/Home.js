import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { userState } from '../recoil/atoms/auth';

// import LivrosApi from '../../api/livros';
// const livrosApi = new LivrosApi();

export default function HomeScreen() {
  const setUser = useSetRecoilState(userState);
  const currentUserState = useRecoilValue(userState);
  const [livros, setLivros] = React.useState([]);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const data = await livrosApi.getLivros();
      setLivros(data);
    };

    bootstrapAsync();
  }, []);

  const logout = async () => {
    setUser({ loggedIn: false, access_token: null, refresh_token: null });
    await SecureStore.deleteItemAsync('access_token');
  };

  return (
    <View>
      <Text>Hello Home</Text>
      <Text>{currentUserState.access_token}</Text>
      {livros.map((livro) => (
        <Text key={livro.id}>
          {livro.title} - {livro.year}
        </Text>
      ))}
      <Button title="Logout" onPress={() => logout()} />
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
