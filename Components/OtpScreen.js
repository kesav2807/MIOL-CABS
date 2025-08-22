import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function OtpScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleOtpChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    if (!phone) {
      Alert.alert("Error", "Please enter your phone or email.");
      return;
    }
    if (otp.join("").length < 4) {
      Alert.alert("Error", "Please enter the full OTP.");
      return;
    }
   
    navigation.navigate("ResetPassword");
  };

  return (
    <View style={styles.container}>

      <View style={styles.topBanner}></View>

      <View style={styles.card}>
        <Text style={styles.title}>Forgot your password</Text>
        <Text style={styles.subtitle}>
          Please enter the phone number or email address you’d like your
          password reset information sent to
        </Text>

      
        <TextInput
          placeholder="Enter Phone number or email"
          keyboardType="default"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />

      
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

       
        <Text style={styles.otpLabel}>Verify OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, i) => (
            <TextInput
              key={i}
              ref={(ref) => (inputs.current[i] = ref)}
              style={styles.otpBox}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleOtpChange(text, i)}
            />
          ))}
        </View>

        
        <Text style={styles.resendText}>Resend OTP via SMS in 00 : 23</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBBF24",
    justifyContent: "flex-start",
  },
  topBanner: {
    height: "20%",
    backgroundColor: "#FBBF24",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -60,
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
  button: {
    backgroundColor: "#FBBF24",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
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
  otpLabel: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  resendText: {
    color: "#FBBF24",
    fontSize: 14,
    textAlign: "center",
  },
});
