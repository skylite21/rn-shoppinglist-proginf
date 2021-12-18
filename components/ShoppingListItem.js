import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// function ShoppingListItem(props) {
const ShoppingListItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <Text style={styles.shoppingListItem}>{props.title}</Text>
    </TouchableOpacity>
  );
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
