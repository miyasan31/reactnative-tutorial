import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../models/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Setting'>;
};

export const Setting: React.FC<Props> = props => {
  const handlePathChange = (pageName: 'About') => {
    // Alert.alert('Simple Button pressed');
    props.navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Go to About" onPress={() => handlePathChange('About')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0cc',
  },
});
