import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import api from '../plugins/api';

const Item = (props) => {
  return (
      <View style={styles.card}>
        <Image source={{ uri: props.item.capa }} style={styles.livro} />
        <Text style={{ fontSize: 15, color: 'white' }}> {props.item.titulo}</Text>
        <Text style={{ padding: 1, fontSize: 17, color: 'lightgreen' }}>
          {' '}
          R$ {props.item.preco.toString()}{' '}
        </Text>
      </View>
  );
}

export default function Ficcao() {

  const [ ficcoes, setFiccoes ] = useState([])

  async function getLivros() {
    const { data } = await api.get('/livros/?categoria__descricao=Ficção')
    console.log(data)
    setFiccoes(data)
  }

  useEffect(() => {
    getLivros()
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteudo}>
          {ficcoes.map((ficcao) => (
            <Item item={ficcao} key={ficcao.id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justfyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#C4C4C4',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: '#12568A',
    width: '40%',
    height: 255,
    margin: 19,
  },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
});
