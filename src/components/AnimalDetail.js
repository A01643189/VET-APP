import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { db } from '../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";

import { Avatar, YStack } from 'tamagui';

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
    <YStack alignItems="center" gap="$2">
      <Avatar circular size="$20" marginBottom="$4">
        <Avatar.Image
          accessibilityLabel="Cam"
          src={animal.picture}
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      <Text>{animal.name}</Text>
      <Text>{animal.age} years</Text>
    </YStack>
  );
}