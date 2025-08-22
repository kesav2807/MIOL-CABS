import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HelpSupportScreen() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Where can I see my past ride history?",
      answer:
        "You can view all your previous trips in the Ride History section of the app.\n\n• Open the app and go to Profile or Menu.\n• Tap on Ride History.\n• You’ll see a list of your Ride History, upcoming and scheduled rides along with trip details like date, fare, and driver information.",
    },
    {
      question: "I forgot my password. How can I reset it?",
      answer:
        "Go to the login screen and tap on 'Forgot Password'. Follow the steps to reset your password via email or OTP.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer:
        "Yes, you can schedule rides in advance from the booking screen by selecting your desired date and time.",
    },
    {
      question: "Can I update my phone number or email ID?",
      answer:
        "Yes, you can update your phone number or email ID by going to your Profile > Edit Profile.",
    },
    {
      question: "How do I book a cab?",
      answer:
        "Open the app, enter your pickup and drop location, select a ride type, and confirm booking.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>

        {/* Center Logo */}
        <Image
          source={require("../../assets/Img/Logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>FAQs</Text>

      {/* FAQ List */}
      <ScrollView contentContainerStyle={styles.faqList}>
        {faqs.map((faq, index) => (
          <View
            key={index}
            style={[
              styles.faqCard,
              activeIndex === index && styles.faqCardActive,
            ]}
          >
            <TouchableOpacity
              style={styles.faqHeader}
              onPress={() => toggleFAQ(index)}
            >
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Ionicons
                name={activeIndex === index ? "chevron-up" : "chevron-down"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Contact Support */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Need help? Our support team is ready to assist you.
        </Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerWrapper: {
    backgroundColor: "#fdbd10",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#fdbd10",
    marginBottom: 15,
  },

  faqList: { padding: 15 },
  faqCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  faqCardActive: {
    backgroundColor: "#fff7e6", // light yellow when expanded
    borderColor: "#fdbd10",
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: { fontSize: 16, fontWeight: "bold", color: "#333" },
  faqAnswer: { marginTop: 8, fontSize: 14, color: "#555", lineHeight: 20 },

  footer: { alignItems: "center", padding: 20 },
  footerText: {
    fontSize: 14,
    color: "#fdbd10",
    marginBottom: 10,
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#fdbd10",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  contactButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
