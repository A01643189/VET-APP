import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import { Button, ListItem, YGroup, YStack } from 'tamagui'
import { ChevronRight, Star } from '@tamagui/lucide-icons'

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
    <YStack gap="$4" >
      <Button onPress={() => navigation.navigate('NewAnimal')} theme="active">Add Animal</Button>
      <ListItemAnimals animals={animals} navigation={navigation} />
    </YStack>
  );
}

function ListItemAnimals({animals, navigation}) {
  return (
    <YGroup alignSelf="center" bordered minHeight="80%" maxHeight="80%" size="$4" >
      {animals.map(item => (
        <YGroup.Item key={item.id}>
          <ListItem
          hoverTheme
          pressTheme
          title={item.name}
          icon={Star}
          iconAfter={ChevronRight}
          onPress={() => navigation.navigate('AnimalDetail', { animalId: item.id })}
          />
        </YGroup.Item>
      ))}
    </YGroup>
  );
}