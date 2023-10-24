import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms/auth';

function Livros ({navigation}) {
  const setUser = useSetRecoilState(userState);

  const logout = async () => {
    setUser({ loggedIn: false, access_token: null, refresh_token: null });
    await SecureStore.deleteItemAsync('access_token');
  };
  const { MY_IP } = process.env;



  return  (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Romance')}>
            Romance {MY_IP}
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Drama')}>
            Drama 
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Terror')}>
            Terror 
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Ficcao')}>
            Ficção 
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button style={styles.button} mode="contained" onPress={() => logout()}>
          Logout 
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#C4C4C4",
    paddingTop: 170
  },
  card: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 1,
  },
  button: {
    backgroundColor: "#12568A",
  },
});

export default Livros