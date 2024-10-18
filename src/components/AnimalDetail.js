import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { db } from '../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";

export default function AnimalDetail({ route }) {
  const { animalId } = route.params;
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      const docSnap = await getDoc(doc(db, 'animals', animalId));
      setAnimal(docSnap.data());
    };
    fetchAnimal();
  }, [animalId]);

  if (!animal) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Name: {animal.name}</Text>
      <Text>Age: {animal.age}</Text>
      <Image source={{ uri: animal.picture }} style={{ width: 100, height: 100 }} />
    </View>
  );
}
