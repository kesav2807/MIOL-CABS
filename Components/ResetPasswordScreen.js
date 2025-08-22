import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    Alert.alert("Success", "Password reset successfully!");
  };

  return (
    <View style={styles.container}>
 
      <View style={styles.topBanner}></View>

   
      <View style={styles.card}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.subtitle}>
          Enter a new password to reset the password on your account. We’ll ask
          for this password whenever you log in.
        </Text>


        <TextInput
          placeholder="New Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

   
        <View style={styles.rulesContainer}>
          <Text style={styles.rule}>⭐ More than 6 characters</Text>
          <Text style={styles.rule}>
            ⭐ Must contain an uppercase and a lowercase Letter (A,z)
          </Text>
          <Text style={styles.rule}>⭐ Must contain a number</Text>
          <Text style={styles.rule}>
            ⭐ Must contain a special character (!,@,#,%)
          </Text>
        </View>

     
        <TextInput
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />

   
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBBF24",
  },
  topBanner: {
    height: "25%",
    backgroundColor: "#FBBF24",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -100,
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FBBF24",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  rulesContainer: {
    marginBottom: 20,
  },
  rule: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#FBBF24",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
