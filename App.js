import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo';
import { useCallback } from 'react';


WebBrowser.maybeCompleteAuthSession();

export default function App() {


  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "204367786739-m0li9b5tkdqt0j44b0jh17et4ukpgme7.apps.googleusercontent.com",
    iosCliendId: "204367786739-m82dvi0rqag8943ja9676l5ocjemkup4.apps.googleusercontent.com",
    androidClientId: "204367786739-s9v0h7p0vga6lm81rkic6hs3a2qeokak.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorisation: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if (user) {
      return (
        <view>
          <Text>Welcome</Text>
          <Text>{user.name}</Text>
        </view>
      )
    }
  }

  return (
    <View className='flex-1' style={{ backgroundColor: '#615149' }}>
      <View className='flex items-center' style={{ flex: 0.55 }}>

      <Image
    className="mt-7"
    style={{ width: 250, height: 250 }}
    source={require('./assets/logo.jpg')}
   />
  
      </View>

      {/* Bottom part - white spaced area */}
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




          {/* Google Login  */}
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

          {/* 204367786739-m0li9b5tkdqt0j44b0jh17et4ukpgme7.apps.googleusercontent.com */}
          {/* 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 */}

          {/* ios 204367786739-m82dvi0rqag8943ja9676l5ocjemkup4.apps.googleusercontent.com */}
          {/* android 204367786739-s9v0h7p0vga6lm81rkic6hs3a2qeokak.apps.googleusercontent.com */}




        </View>
      </View>
    </View>
  );
}