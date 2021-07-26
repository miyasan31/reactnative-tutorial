/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/pages/Home';
import {About} from './src/pages/About';
import {Setting} from './src/pages/Setting';
import type {RootStackParamList} from './src/models/types';

const App: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{userId: 'aaaa'}} // paramsを渡すこと可,tsで定義
          options={{title: 'みやさんApp'}} //optionsでnameのタイトル名を書き換え可
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
