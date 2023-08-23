// import * as React from 'react';
// import * as SecureStore from 'expo-secure-store';

// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { userState } from './recoil/atoms/auth';

// import LoginScreen from './screens/Login';
// import HomeScreen from './screens/Home';

// const Stack = createNativeStackNavigator();

// export default function Main() {
//   const currentUserState = useRecoilValue(userState);
//   const setUser = useSetRecoilState(userState);

//   React.useEffect(() => {
//     const bootstrapAsync = async () => {
//       let access_token = null;
//       try {
//         access_token = await SecureStore.getItemAsync('access_token');
//       } catch (e) {
//         console.log(e);
//       }
//       if (access_token === null) {
//         setUser({ access_token: null, loggedIn: false });
//       } else {
//         setUser({ access_token, loggedIn: true });
//       }
//     };

//     bootstrapAsync();
//   }, []);

//   return (
//     // <NavigationContainer>
//       <Stack.Navigator>
//         {currentUserState.loggedIn ? (
//           <Stack.Screen name="Home" component={HomeScreen} />
//         ) : (
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//         )}
//       </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { userState } from './recoil/atoms/auth';

import LoginScreen from './screens/Login';
// import HomeScreen from './screens/Home';
import Livros from "./screens/Livros";
import Romance from "./screens/Romance";
import Drama from "./screens/Drama";
import Terror from "./screens/Terror";
import Ficcao from "./screens/Ficcao";

const Stack = createNativeStackNavigator();

export default function Main() {
  const currentUserState = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let access_token = null;
      try {
        access_token = await SecureStore.getItemAsync('access_token');
      } catch (e) {
       // console.log(e);
      }
      if (access_token === null) {
        setUser({ access_token: null, loggedIn: false });
      } else {
        setUser({ access_token, loggedIn: true });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserState.loggedIn ? (
          <>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Romance" component={Romance} />
          <Stack.Screen name="Drama" component={Drama} />
          <Stack.Screen name="Terror" component={Terror} />
          <Stack.Screen name="Ficcao" component={Ficcao} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
