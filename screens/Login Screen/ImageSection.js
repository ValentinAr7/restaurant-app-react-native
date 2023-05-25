import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

const ImageSection = () => {
  const [fontsLoaded] = useFonts({
    MarckScript: require("../../assets/fonts/MarckScript-Regular.ttf"),
  });

  return (
    <View style={{ flex: 0.55, alignItems: "center" }}>
      <ImageBackground
        style={{ width: "110%", height: "110%" }}
        source={require("../../assets/restaurant-banner.jpeg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.66 }}
      >
        {/* Text or other components to overlay on the image */}
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginTop: "25%",
            fontFamily: fontsLoaded ? "MarckScript" : "Arial", // Use the loaded font
            fontStyle: "italic",
          }}
        >
          Food Paradise
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ImageSection;
