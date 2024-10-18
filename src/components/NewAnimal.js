import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { addDoc, collection } from "firebase/firestore";
import { Input, Button, YStack } from 'tamagui';

export default function NewAnimal({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');

  const handleAddAnimal = async () => {
    try {
      await addDoc(collection(db, 'animals'), { name, age, picture });
      navigation.navigate('MainMenu');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <YStack gap="$2">
      <Input placeholder="Name" value={name} onChangeText={setName} size="$4" />
      <Input placeholder="Age" value={age} onChangeText={setAge} size="$4" />
      <Input placeholder="Picture URL" value={picture} onChangeText={setPicture} size="$4" />
      <Button title="Add Animal" theme="active" onPress={handleAddAnimal}>Add Animal</Button>
    </YStack>
  );
}