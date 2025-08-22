import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return;
    }
    Alert.alert("Success", "Login successful (dummy)");
    navigation.replace("Home"); 
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image source={require("../assets/Img/Logo.png")} style={styles.logo} />
        <Text style={styles.welcome}>
          Welcome To <Text style={{ fontWeight: "bold" }}>Milo Cabs!</Text>
        </Text>
      </View>

   
      <View style={styles.card}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <Text style={styles.activeTab}>Login</Text>
          <Text
            style={styles.inactiveTab}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign Up
          </Text>
        </View>


        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>👁️</Text>
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

     
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

  
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>🌐 Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}> Continue with Apple</Text>
        </TouchableOpacity>

       
        <Text style={styles.consent}>
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Milo Cabs and its affiliates to the
          number provided
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBBF24" },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: { width: 80, height: 80, marginBottom: 15, resizeMode: "contain" },
  welcome: { fontSize: 22, color: "#000", textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FBBF24",
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: "#FBBF24",
    paddingBottom: 5,
  },
  inactiveTab: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    marginBottom: 10,
    paddingRight: 10,
  },
  eyeIcon: { fontSize: 18, color: "#888" },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#000",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FBBF24",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  orText: { marginHorizontal: 10, color: "#000" },
  socialButton: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  socialText: { fontSize: 16, fontWeight: "500", color: "#000" },
  consent: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    marginTop: 10,
  },
});
