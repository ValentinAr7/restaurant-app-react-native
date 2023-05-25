import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function HeaderImageSection() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      "MarckScript-Regular": require("../assets/fonts/MarckScript-Regular.ttf"),
    });
    setFontsLoaded(true);
  }, []);

  useEffect(() => {
    loadFonts();
    SplashScreen.hideAsync();
  }, [loadFonts]);

  if (!fontsLoaded) {
    return null; // Render loading state or placeholder
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/restaurant-banner.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.7 }}
        >
          {/* Text with the applied font style */}
          <Text style={styles.overlayText}>Overlay Text</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#615149",
  },
  imageContainer: {
    flex: 0.55,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: "50%",
    fontFamily: "MarckScript-Regular", // Apply the custom font here
  },
});
