import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PaymentSuccessScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("FeedbackScreen"); 
    }, 3000); 

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* 🔆 Top Gradient Section with Badge */}
      <ImageBackground
        source={require("../../assets/Img/new.png")}
        style={styles.topSection}
        resizeMode="cover"
      >
        {/* ✅ White Badge with Checkmark */}
        <Image
          source={require("../../assets/Img/new1.png")}
          style={styles.tickIcon}
          resizeMode="contain"
        />
      </ImageBackground>

      {/* ⬇️ Bottom White Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Payment Successful</Text>

        <Text style={styles.message}>
          Your booking has been secured successfully. {"\n"}
          Enjoy comfort, safety, and reliability {"\n"}
          throughout your journey with us.
        </Text>

        {/* Footer with logo */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Thanks for Choosing </Text>
          <Image
            source={require("../../assets/Img/Logo1.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  topSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  tickIcon: {
    width: 150,
    height: 150,
  },

  bottomCard: {
    flex: 1.2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: "center",
    marginTop: -40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FBBF24", 
    marginBottom: 15,
  },

  message: {
    fontSize: 15,
    textAlign: "center",
    color: "#333",
    marginBottom: 25,
    lineHeight: 22,
  },

  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 6,
  },

  logo: {
    width: 140,
    height: 40,
  },
});
