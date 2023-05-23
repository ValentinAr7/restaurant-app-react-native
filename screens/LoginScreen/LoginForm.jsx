import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Form = () => (
  <View className='flex-1 bg-white px-8 pt-8'
    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
  >

    <View className='form space-y-2'>
      <Text className=' text-gray-700 ml-4'>Email address</Text>
      <TextInput
        className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
        placeholder='Enter email'
      />

      <Text className=' text-gray-700 ml-4'>Password</Text>
      <TextInput
        className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
        secureTextEntry
        placeholder='Password'
      />

      <TouchableOpacity className='flex items-end mb-5'>
        <Text>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity className='py-3 bg-[#00C9AB] rounded-xl'>
        <Text className='font-xl text-[#000] font-semibold text-center'>
          Login
        </Text>
      </TouchableOpacity>

      <Text className=' text-center pt-5 font-semibold text-lg'>Or</Text>

    </View>
    </View>    
  );
