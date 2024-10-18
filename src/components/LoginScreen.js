import React, { useState } from 'react';
import { Text } from 'react-native';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, YStack, Input } from 'tamagui'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.navigate('MainMenu'))
      .catch(() => setError('Invalid login credentials'));
  };

  return (
      <YStack gap="$2" textColor="$black" >
        <Input placeholder="Email" value={email} onChangeText={setEmail} size="$4" />
        <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry size="$4"  />
        {error && <Text>{error}</Text>}
        <Button onPress={handleLogin} theme="active" >Login</Button>
        <Button onPress={() => navigation.navigate('SignUp')} variant="disabled" >Do not have an account? SignUp</Button>
      </YStack>
  );
}