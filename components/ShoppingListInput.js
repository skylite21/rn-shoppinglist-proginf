import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, Button, View, Modal, TouchableOpacity } from 'react-native';

const ShoppingListInput = props => {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState('');

  const inputHandler = enteredText => {
    setEnteredShoppingListItem(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What to buy?"
          onChangeText={inputHandler}
          value={enteredShoppingListItem}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {
              setEnteredShoppingListItem('');
              props.onCancel();
            }}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {
              props.onAdd(enteredShoppingListItem);
              setEnteredShoppingListItem('');
              props.onCancel();
            }}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonView: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ShoppingListInput;
