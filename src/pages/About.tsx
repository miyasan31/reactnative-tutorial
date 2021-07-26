import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../models/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'About'>;
};

export const About = (props: Props) => {
  const handlePathChange = (pageName: 'Home' | 'Setting') => {
    // Alert.alert('Simple Button pressed');
    props.navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={() => handlePathChange('Home')} />
      <Text>About Screen</Text>
      <Button
        title="Go to Setting"
        onPress={() => handlePathChange('Setting')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fc0',
  },
});
