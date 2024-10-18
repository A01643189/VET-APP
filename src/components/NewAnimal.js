import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../firebase/firebase';
import { addDoc, collection } from "firebase/firestore";

export default function NewAnimal({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');

  const handleAddAnimal = async () => {
    await addDoc(collection(db, 'animals'), { name, age, picture });
    navigation.navigate('MainMenu');
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} />
      <TextInput placeholder="Picture URL" value={picture} onChangeText={setPicture} />
      <Button title="Add Animal" onPress={handleAddAnimal} />
    </View>
  );
}
