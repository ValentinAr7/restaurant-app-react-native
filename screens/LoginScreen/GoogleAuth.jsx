import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";




const GoogleAuth = ({ request, promptAsync }) => (

    
    <View>
    <TouchableOpacity className='bg-white rounded-sm px-6 py-6 flex-row justify-center align-middle'
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}>
      <Image
        className='w-7 h-7'
        source={{
          uri: "https://i.ibb.co/j82DCcR/search.png",
        }}
      />
      <Text className='ml-4 text-lg font-medium'>Sign in with Google</Text>
    </TouchableOpacity>

  </View>
  );

  export default GoogleAuth;
