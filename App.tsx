import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={email}
          keyboardType={'email-address'}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your email here'}
          onChangeText={value => {
            setEmail(value);
          }}></TextInput>
        <TextInput
          value={password}
          secureTextEntry={true}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your password here'}
          onChangeText={value => {
            setPassword(value);
          }}></TextInput>
        <Pressable
          style={{backgroundColor: 'black'}}
          disabled={email.length === 0 || password.length < 8}
          onPress={() => {
            console.log('pressed');
            console.log(email, password);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </Pressable>
        {/* <Button title={'Submit'} color={'red'} style={{backgroundColor: 'black'}} ></Button> */}
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Button
    //     title="Press Me"
    //     onPress={handlePress}
    //     color="#007bff"
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
