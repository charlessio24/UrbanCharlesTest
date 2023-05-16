import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

type Props = {
  route: {
    params: {
      user: User;
    };
  };
};

const UserDetails = ({ route }: Props) => {
    const { user } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          {user.first_name} {user.last_name}
        </Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone_number}</Text>
        <Text>City: {user.address.city}</Text>
        <Text>State: {user.address.state}</Text>
        <Text>Country: {user.address.country}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  
  export default UserDetails;