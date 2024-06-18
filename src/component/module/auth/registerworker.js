import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../../base/text/input';
import LargeButton from '../../base/button/largebutton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '@env';

const TextRegisterWorker = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  });

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (form.password !== form.confirm) {
      Alert.alert('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/users/register/workers`, form);
      console.log(res.data);
      navigation.navigate('LoginWorker');
    } catch (error) {
      const messageErr = error.response?.data?.message || 'Something went wrong!';
      console.log(error);
      Alert.alert(messageErr);
    }
  };

  return (
    <View>
      <View>
        <Text
          style={{color: 'gray', position: 'relative', bottom: 10, left: 20}}>
          Name
        </Text>
        <Input
          onChangeText={value => setForm({...form, name: value})}
          value={form.name}
          placeholder="Enter Your Fullname..."
        />
      </View>
      <View style={{paddingTop: 50}}>
        <Text
          style={{color: 'gray', position: 'relative', bottom: 10, left: 20}}>
          Email
        </Text>
        <Input
          onChangeText={value => setForm({...form, email: value})}
          value={form.email}
          placeholder="Enter Your Email Address..."
        />
      </View>
      <View style={{paddingTop: 50}}>
        <Text
          style={{color: 'gray', position: 'relative', bottom: 10, left: 20}}>
          Phone
        </Text>
        <Input
          onChangeText={value => setForm({...form, phone: value})}
          value={form.phone}
          placeholder="Enter Your Phone Number..."
          keyboardType="numeric"
        />
      </View>
      <View style={{paddingTop: 50}}>
        <Text
          style={{color: 'gray', position: 'relative', bottom: 10, left: 20}}>
          Password
        </Text>
        <Input
          onChangeText={value => setForm({...form, password: value})}
          value={form.password}
          placeholder="Enter Your Password..."
          secureTextEntry={true}
        />
      </View>
      <View style={{paddingTop: 50}}>
        <Text
          style={{color: 'gray', position: 'relative', bottom: 10, left: 20}}>
          Confirm
        </Text>
        <Input
          onChangeText={value => setForm({...form, confirm: value})}
          value={form.confirm}
          placeholder="Re-type Your Password..."
          secureTextEntry={true}
        />
      </View>
      <View style={{padding: 30}}>
        <LargeButton label="Sign Up" onPress={handleRegister} />
        <Text
          style={{
            color: '#000000',
            paddingTop: 20,
            fontSize: 15,
            paddingLeft: 10,
          }}>
          Already have an account?{' '}
          <Text
            style={{color: '#FBB017'}}
            onPress={() => navigation.navigate('LoginWorker')}>
            Sign in here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default TextRegisterWorker;
