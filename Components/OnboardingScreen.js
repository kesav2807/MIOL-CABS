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

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
     
      <Image
        source={"../"}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.bottomCard}>
        <Text style={styles.title}>24/7 Rides. Just Tap And Go</Text>
        <Text style={styles.subtitle}>
          Effortless Ride Booking in Seconds—Just a Few Taps Away.
        </Text>

      
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>


        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
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
  skip: { fontSize: 16, fontWeight: "600", color: "#F9C623", marginBottom: 20 },
  nextButton: {
    width: "100%",
    backgroundColor: "#F9C623",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: { fontSize: 16, fontWeight: "700", color: "#000" },
});
