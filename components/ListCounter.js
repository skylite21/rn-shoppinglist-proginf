import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ListCounter = props => {
  return (
    <View>
      <Text style={styles.counter}>
        You have {props.count} {props.count <= 1 ? 'item' : 'items'} left
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
    // border radius miatt kell
    overflow: 'hidden',
  },
});

export default ListCounter;
