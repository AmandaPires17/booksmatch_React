import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const Item = (props) => {
  return (
      <View style={styles.card}>
        <Image source={{ uri: props.item.capa }} style={styles.livro} />
        <Text style={{ color: 'black' }}> {props.item.titulo}</Text>
        <Text style={{ color: 'black' }}> {props.item.genero}</Text>
        <Text style={{ fontSize: 15, color: '#5B0FFF' }}>
          {' '}
          R$ {props.item.preco.toString()}{' '}
        </Text>
      </View>
  );
}

export default function Romance() {
  const romances = [
    {
      id: 1,
      capa: 'https://m.media-amazon.com/images/I/518sWR99h1L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Eu e esse meu coração',
      genero: 'Romance',
      preco: 40.7,
    },
    {
      id: 2,
      capa: 'https://m.media-amazon.com/images/I/41QbyDiPOoL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Malibu renasce',
      genero: 'Romance',
      preco: 35.9,
    },
    {
      id: 3,
      capa: 'https://m.media-amazon.com/images/I/41lcIvCdcdL._SX335_BO1,204,203,200_.jpg',
      titulo: 'Em outra vida, talvez?',
      genero: 'Romance',
      preco: 34.99,
    },
    {
      id: 4,
      capa: 'https://m.media-amazon.com/images/I/51G6wKsK0QL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'A razão do amor',
      genero: 'Romance',
      preco: 18.9,
    },
    {
      id: 5,
      capa: 'https://m.media-amazon.com/images/I/51zbr9-XvRS._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'E não sobrou nenhum',
      genero: 'Romance',
      preco: 37.99,
    },
    {
      id: 6,
      capa: 'https://m.media-amazon.com/images/I/41IKTYiymKL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Admirável mundo novo',
      genero: 'Romance',
      preco: 32.39,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteudo}>
          {romances.map((romance) => (
            <Item item={romance} key={romance.id} />
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
    backgroundColor: '#B361F5',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#B361F5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: '#EBB5FF',
    width: '40%',
    height: 278,
    margin: 18,
  },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
});
