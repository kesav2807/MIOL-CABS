import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

export default function BookingConfirmedScreen() {
  return (
    <View style={styles.container}>
      {/* Top Gradient Section */}
      <ImageBackground
        source={require("../../assets/Img/success.png")} 
        style={styles.topSection}
        resizeMode="cover"
      >
        
      </ImageBackground>

      {/* Bottom White Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Booking Confirmed!</Text>

        <Text style={styles.message}>
          Your <Text style={styles.bold}>OTP</Text> and driver details have
          been sent to your{" "}
          <Text style={styles.bold}>WhatsApp Number</Text>.
        </Text>

        <Text style={styles.subMessage}>
          Our team will contact you shortly. Please share the OTP with your
          driver before the ride begins.
        </Text>

        <Text style={styles.footer}>Thanks For Booking{"\n"}Milo Cabs!</Text>
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
    width: 120,
    height: 120,
    tintColor: "#fff", // White tick
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#FBBF24",
    marginBottom: 10,
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },

  subMessage: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
    lineHeight: 20,
  },

  footer: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FBBF24",
    textAlign: "center",
    lineHeight: 24,
  },

  bold: { fontWeight: "bold" },
});
