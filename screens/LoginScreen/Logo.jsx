import React from 'react';
import { View, Image } from "react-native";

const Logo = () => (
    <View className='align-middle'>
      <Image
    className="mt-7"
    style={{ width: 250, height: 250 }}
    source={require('../../assets/logo.jpg')}
   />
    </View>
  );

  export default Logo;