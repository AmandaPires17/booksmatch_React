import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';

import Livros from './src/screens/Livros';
import Romance from './src/screens/Romance';
import Drama from './src/screens/Drama';
import Terror from './src/screens/Terror';
import Ficcao from './src/screens/Ficcao';
import Main from './src/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Romance" component={Romance} />
          <Stack.Screen name="Drama" component={Drama} />
          <Stack.Screen name="Terror" component={Terror} />
          <Stack.Screen name="Ficcao" component={Ficcao} />
        </Stack.Navigator>
        <RecoilRoot>
      <Main />
      <StatusBar style="auto" />
    </RecoilRoot>
      </NavigationContainer>
    </PaperProvider>
  );
}
