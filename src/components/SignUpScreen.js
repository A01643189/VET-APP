import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { auth } from '../firebase/firebase';  // Import auth from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, YStack, Input } from 'tamagui'

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (email === '' || password === '') {
      setError('Email and password are required.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User signed up:', user);
        navigation.navigate('MainMenu'); // Navigate after sign-up
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <YStack gap="$2" textColor="$black" >
      <Input 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
        size="$4"
      />
      <Input 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        size="$4"
      />
      {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button onPress={handleSignUp} theme="active" >SignUp</Button>
      <Button onPress={() => navigation.navigate('Login')} variant="disabled" >Already have an account? LogIn</Button>
      </YStack>
  );
}