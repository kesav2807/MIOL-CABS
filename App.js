import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogoScreen from "./Components/LogoPage";
import OnboardingScreen from "./Components/OnboardingScreen";
import OnboardingScreen2 from "./Components/OnboardingScreen2";
import LoginScreen from "./Components/LoginScreen";
import SignupScreen from "./Components/SignupScreen";
import OtpScreen from "./Components/OtpScreen";
import ResetPasswordScreen from "./Components/ResetPasswordScreen";
import DrawerNavigator from "./Components/User/DrawerNavigator";
import PaymentSummaryScreen from "./Components/User/PaymentSummaryScreen";
import BookingConfirmedScreen from "./Components/User/BookingConfirmedScreen";
import PaymentSuccessScreen from "./Components/User/PaymentSuccessScreen";
import FeedbackScreen from "./Components/User/FeedbackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* Splash / Onboarding */}
        <Stack.Screen name="Splash" component={LogoScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />

        {/* Auth */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />

        {/* Main Drawer (after login) */}
        <Stack.Screen name="Home" component={DrawerNavigator} />

        <Stack.Screen name="PaymentSummary" component={PaymentSummaryScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="BookingConfirmed" component={BookingConfirmedScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
