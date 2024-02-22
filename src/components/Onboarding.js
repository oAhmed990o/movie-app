import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import slides from '../../slides';
import OnboardingItem from './OnboardingItem';

export default Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});