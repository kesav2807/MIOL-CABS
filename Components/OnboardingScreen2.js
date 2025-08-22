import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Onboarding2({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/Img/img2.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.bottomCard}>
        <Text style={styles.title}>Ride Smart. Travel Better</Text>
        <Text style={styles.subtitle}>
          Quick, Reliable, and Always There When You Need It.
        </Text>

      
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.nextButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9C623" },
  image: { width: width, height: height * 0.55 },
  bottomCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    alignItems: "center",
    paddingTop: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 25,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginHorizontal: 5,
  },
  activeDot: { backgroundColor: "#F9C623" },
  nextButton: {
    width: "100%",
    backgroundColor: "#F9C623",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: { fontSize: 16, fontWeight: "700", color: "#000" },
});
