import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slick';
import { useNavigation } from '@react-navigation/native';
import getUsers from '../api';

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleUserPress = (user: User) => {
    navigation.navigate('UserDetails', { user });
  };

  const renderUser = (user: User) => (
    <TouchableOpacity key={user.id} onPress={() => handleUserPress(user)}>
      <View style={styles.user}>
        <Text>{user.first_name}</Text>
        <Text>{user.last_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Slider style={styles.slider}>
        {users.map((user) => renderUser(user))}
      </Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 300,
    height: 200,
  },
  user: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    height: 150,
    width: 300,
  },
});

export default UserList;
