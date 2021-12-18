import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import ShoppingListInput from './components/ShoppingListInput';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState('');
  const [shoppingListItems, setShoppingListItems] = useState([]);

  function addToShoppingList(itemToAdd) {
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
      <ShoppingListInput onAdd={addToShoppingList} />
      <View style={styles.shoppingList} showsVerticalScrollIndicator={false}>
        <FlatList
          data={shoppingListItems}
          renderItem={data => <ShoppingListItem title={data.item.value} />}
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
  shoppingList: {
    marginTop: 20,
    alignSelf: 'flex-start',
    width: '100%',
  },
});
