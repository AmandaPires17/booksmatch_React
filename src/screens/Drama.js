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

export default function Drama() {

  const [ dramas, setDramas ] = useState([])

  async function getLivros() {
    const { data } = await api.get('/livros/')
    console.log(data)
    setDramas(data)
  }

  useEffect(() => {
    getLivros()
  }, [])


  //const dramas = [
  //  {
  //    id: 1,
  //    capa: 'https://m.media-amazon.com/images/I/51wdOrz6uNL._SX340_BO1,204,203,200_.jpg',
  //    titulo: '"O sol é para todos"',
  //    preco: 36.7,
  //  },
  //  {
  //    id: 2,
  //    capa: 'https://m.media-amazon.com/images/I/413th2NQc8L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
  //    titulo: '"A paciente silenciosa"',
  //    preco: 33.9,
  //  },
  //  {
  //    id: 3,
  //    capa: 'https://m.media-amazon.com/images/I/41MRn6hy8-L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
  //    titulo: '"Duna: livro 1"',
  //    preco: 47.99,
  //  },
  //  {
  //    id: 4,
  //    capa: 'https://m.media-amazon.com/images/I/51Ooch+98bL._SY344_BO1,204,203,200_.jpg',
  //    titulo: '"O apanhador no campo"',
  //    preco: 48.9,
  //  },
  //  {
  //    id: 5,
  //    capa: 'https://m.media-amazon.com/images/I/41MeSSE9I-L.jpg',
  //    titulo: '"Um inimigo do povo"',
  //    preco: 17.9,
  //  },
  //  {
  //    id: 6,
  //    capa: 'https://m.media-amazon.com/images/I/41oMkonRbTL._SX331_BO1,204,203,200_.jpg',
  //    titulo: '"Hamlet"',
  //    preco: 14.99,
  //  },
  //];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteudo}>
          {dramas.map((drama) => (
            <Item item={drama} key={drama.id} />
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
