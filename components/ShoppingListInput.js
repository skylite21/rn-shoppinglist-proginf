import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, Button, View } from 'react-native';

const ShoppingListInput = props => {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState('');

  const inputHandler = enteredText => {
    setEnteredShoppingListItem(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="What to buy?"
        onChangeText={inputHandler}
        value={enteredShoppingListItem}
      />
      <Button
        title={'Add'}
        onPress={() => {
          props.onAdd(enteredShoppingListItem);
          setEnteredShoppingListItem('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
});

export default ShoppingListInput;
