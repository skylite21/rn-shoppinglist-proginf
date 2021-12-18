import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import ListCounter from './components/ListCounter';
import ShoppingListInput from './components/ShoppingListInput';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);

  function addToShoppingList(itemToAdd) {
    setShoppingListItems(currentItems => {
      return [...currentItems, { key: Math.random().toString(), value: itemToAdd }];
    });
  }

  const deleteFromShoppingList = key => {
    setShoppingListItems(currentItems => {
      return currentItems.filter(item => item.key !== key);
    });
  };

  // use effect will always trigger when state changes
  useEffect(() => {
    console.log(shoppingListItems);
    // here you define the dependency, what state you are watching:
    // ha ez empty array: Component inicializálásnál fut le 1x
  }, [shoppingListItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Create Shopping List!</Text>
      <ListCounter count={shoppingListItems.length} />
      <Button
        title={'Add new item'}
        onPress={() => {
          // window.alert('ez egy popup');
          setIsAddPopupVisible(true);
        }}
      />
      <ShoppingListInput
        onAdd={addToShoppingList}
        visible={isAddPopupVisible}
        onCancel={() => {
          setIsAddPopupVisible(false);
        }}
      />
      <View style={styles.shoppingList} showsVerticalScrollIndicator={false}>
        <FlatList
          data={shoppingListItems}
          renderItem={data => (
            <ShoppingListItem
              title={data.item.value}
              id={data.item.key}
              onDelete={deleteFromShoppingList}
            />
          )}
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
