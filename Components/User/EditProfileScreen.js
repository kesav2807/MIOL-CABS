import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("Nivetha");
  const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("nivethakumar@gmail.com");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Profile Image */}
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.changePhoto}>Change Photo</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Full Name"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        {/* Change Password */}
        <TouchableOpacity style={styles.changePasswordRow}>
          <Text style={styles.changePassword}>Change Password</Text>
          <Ionicons name="create-outline" size={16} color="#f4a100" />
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f4b400",
    alignItems: "center",
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 60,
    borderWidth: 3,
    borderColor: "#fff",
  },
  changePhoto: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    marginBottom: 20,
  },
  changePasswordRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  changePassword: {
    fontSize: 15,
    fontWeight: "600",
    color: "#f4b400",
    marginRight: 5,
  },
  saveButton: {
    backgroundColor: "#f4b400",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  saveText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
