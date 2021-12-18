import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState('');
  const [shoppingListItems, setShoppingListItems] = useState([]);

  function addToShoppingList() {
    setShoppingListItems(currentItems => {
      return [...currentItems, { key: Math.random().toString(), value: enteredShoppingListItem }];
    });
    setEnteredShoppingListItem('');
  }

  function inputHandler(enteredText) {
    setEnteredShoppingListItem(enteredText);
  }

  // use effect will always trigger when state changes
  useEffect(() => {
    console.log(shoppingListItems);
    // here you define the dependency, what state you are watching:
    // ha ez empty array: Component inicializálásnál fut le 1x
  }, [shoppingListItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Create Shopping List!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What to buy?"
          onChangeText={inputHandler}
          value={enteredShoppingListItem}
        />
      </View>
      <Button title="Add" onPress={addToShoppingList} />
      <View style={styles.shoppingList} showsVerticalScrollIndicator={false}>
        <FlatList
          data={shoppingListItems}
          renderItem={data => <Text style={styles.shoppingListItem}>{data.item.value}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 30,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  shoppingList: {
    marginTop: 20,
    alignSelf: 'flex-start',
    width: '100%',
  },
  shoppingListItem: {
    backgroundColor: '#b2ddf7',
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
    // border radius miatt kell
    overflow: 'hidden',
  },
});
