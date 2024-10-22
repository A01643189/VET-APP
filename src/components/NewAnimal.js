import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { addDoc, collection } from "firebase/firestore";
import { Input, Button, YStack, Image } from 'tamagui';
import { View } from 'react-native';

export default function NewAnimal({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');

  const handleAddAnimal = async () => {
    try {
      const docRef = await addDoc(collection(db, 'animals'), { name, age, picture });
      const newAnimal = { id: docRef.id, name, age, picture };
      navigation.navigate('MainMenu', { newAnimal });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <YStack gap="$2">
      <Input placeholder="Name" value={name} onChangeText={setName} size="$4" />
      <Input placeholder="Age" value={age} onChangeText={setAge} size="$4" />
      <Input 
      placeholder="Picture URL" 
      value={picture} 
      onChangeText={setPicture} 
      size="$4" 
      />
      {picture && (
        <View style={{ marginTop: 10 }}>
          <Image 
            source={{ uri: picture }} 
            style={{ width: 100, height: 100, borderRadius: 10 }}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.log('Error loading image')}
          />
        </View>
      )}
      <Button title="Add Animal" theme="active" onPress={handleAddAnimal}>Add Animal</Button>
    </YStack>
  );
}