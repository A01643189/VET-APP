import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import { db } from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";

export default function MainMenu({ navigation }) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const querySnapshot = await getDocs(collection(db, 'animals'));
      setAnimals(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchAnimals();
  }, []);

  return (
    <View>
      <FlatList
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('AnimalDetail', { animalId: item.id })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Add Animal" onPress={() => navigation.navigate('NewAnimal')} />
    </View>
  );
}
