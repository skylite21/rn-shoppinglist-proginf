import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ShoppingListItem = props => {
  return <Text style={styles.shoppingListItem}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  shoppingListItem: {
    backgroundColor: '#b2ddf7',
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
    // border radius miatt kell
    overflow: 'hidden',
  },
});

export default ShoppingListItem;
