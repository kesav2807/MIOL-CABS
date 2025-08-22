import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding"); // move to Home after 3s
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../assets/Img/bg.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      
      <View style={styles.logoCard}>
        <Image
          source={require("../assets/Img/Logo1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          <Text style={styles.black}>MILO </Text>
          <Text style={styles.yellow}>CABS</Text>
        </Text>
        <Text style={styles.tagline}>Your Ride, Your Vibe.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9c623", justifyContent: "center", alignItems: "center" },
  logoCard: { backgroundColor: "#fff", borderRadius: 20, padding: 25, alignItems: "center" },
  logo: { width: 80, height: 80, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 5 },
  black: { color: "#000" },
  yellow: { color: "#f9c623" },
  tagline: { fontSize: 14, color: "#444" },
  taxi: { width: "80%", height: 180, marginTop: 40 },
});
