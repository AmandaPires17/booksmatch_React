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

export default function Ficcao() {
  const ficcoes = [
    {
      id: 1,
      capa: 'https://m.media-amazon.com/images/I/51i7kH+rh9L._SX322_BO1,204,203,200_.jpg',
      titulo: 'É Assim que Acaba: 1',
      genero: 'Ficção',
      preco: 37.7,
    },
    {
      id: 2,
      capa: 'https://m.media-amazon.com/images/I/51jiQtSEwDL._SX327_BO1,204,203,200_.jpg',
      titulo: 'É assim que começa: 2',
      genero: 'Ficção',
      preco: 10.9,
    },
    {
      id: 3,
      capa: 'https://m.media-amazon.com/images/I/51ABRx3d7GL._SX335_BO1,204,203,200_.jpg',
      titulo: 'Verity',
      genero: 'Ficção',
      preco: 17.99,
    },
    {
      id: 4,
      capa: 'https://m.media-amazon.com/images/I/51kAYMwbQIL._SX342_BO1,204,203,200_.jpg',
      titulo: 'A Biblioteca da Meia-Noite',
      genero: 'Ficção',
      preco: 18.9,
    },
    {
      id: 5,
      capa: 'https://m.media-amazon.com/images/I/41D4d0A2GYL._SX412_BO1,204,203,200_.jpg',
      titulo: 'A parte que falta',
      genero: 'Ficção',
      preco: 37.99,
    },
    {
      id: 6,
      capa: 'https://m.media-amazon.com/images/I/41P-Id9hzrL._SX362_BO1,204,203,200_.jpg',
      titulo: 'Telefone sem fio',
      genero: 'Ficção',
      preco: 42.39,
    },
  ];

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
