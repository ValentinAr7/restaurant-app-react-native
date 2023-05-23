import React from 'react';
import { Text, View } from 'react-native';

const UserInfo = ({ user }) => (
  <View>
    <Text>Welcome</Text>
    <Text>{user.name}</Text>
  </View>
);

export default UserInfo;