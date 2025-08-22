import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FeedbackScreen() {
  const [rating, setRating] = useState(3);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigation = useNavigation();

  const tags = ["Clean Car", "Friendly Driver", "On-Time", "Comfortable Ride", "Know the Route"];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    // Simulate storing feedback (frontend only)
    const feedback = { rating, selectedTags };
    console.log("📩 User Feedback:", feedback);

    Alert.alert(
      "Thank You!",
      "Your feedback has been submitted successfully ✅",
      [{ text: "OK", onPress: () => navigation.replace("Home") }]
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/Img/success.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Rate Your Ride Experience</Text>
        <Text style={styles.subtitle}>How was your Ride?</Text>

        {/* ⭐ Stars */}
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Ionicons
                name={i <= rating ? "star" : "star-outline"}
                size={36}
                color={i <= rating ? "#FBBF24" : "#E5E7EB"}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Feedback */}
        <Text style={styles.quickFeedback}>Quick Feedback</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[
                styles.tag,
                selectedTags.includes(tag) && styles.tagSelected,
              ]}
              onPress={() => toggleTag(tag)}
            >
              <Text
                style={[
                  styles.tagText,
                  selectedTags.includes(tag) && styles.tagTextSelected,
                ]}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FBBF24",
    marginTop: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    marginVertical: 10,
    textAlign: "center",
  },
  stars: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "center",
  },
  quickFeedback: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
    color: "#000",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#FEF3C7",
    margin: 6,
  },
  tagSelected: {
    backgroundColor: "#FBBF24",
  },
  tagText: { fontSize: 14, fontWeight: "500", color: "#000" },
  tagTextSelected: { color: "#000" },
  button: {
    marginTop: 25,
    backgroundColor: "#FBBF24",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
