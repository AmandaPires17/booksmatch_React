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

export default function Terror() {

  const [ terrores, setTerrores ] = useState([])

  async function getLivros() {
    const { data } = await api.get('/livros/')
    console.log(data)
    setTerrores(data)
  }

  useEffect(() => {
    getLivros()
  }, [])


// export default function Terror() {
//   const terrores = [
//     {
//       id: 1,
//       capa: 'https://m.media-amazon.com/images/I/51CMybAN9JL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
//       titulo: '"O médico e o monstro"',
//       preco: 10.7,
//     },
//     {
//       id: 2,
//       capa: 'https://m.media-amazon.com/images/I/51XNQt0VStL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
//       titulo: '"Frankenstein"',
//       preco: 10.9,
//     },
//     {
//       id: 3,
//       capa: 'https://m.media-amazon.com/images/I/51srv6HWjZL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
//       titulo: '"A ilha do tesouro"',
//       preco: 17.99,
//     },
//     {
//       id: 4,
//       capa: 'https://m.media-amazon.com/images/I/51t-2xkikXL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
//       titulo: '"O chamado de Cthulhu"',
//       preco: 18.9,
//     },
//     {
//       id: 5,
//       capa: 'https://m.media-amazon.com/images/I/51Ha33UvSgL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
//       titulo: '"Horror na colina"',
//       preco: 11.9,
//     },
//     {
//       id: 6,
//       capa: 'https://m.media-amazon.com/images/I/41SP7v1xv6L.jpg',
//       titulo: '"O antimodernista"',
//       preco: 23.99,
//     },
//   ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteudo}>
          {terrores.map((terror) => (
            <Item item={terror} key={terror.id} />
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
