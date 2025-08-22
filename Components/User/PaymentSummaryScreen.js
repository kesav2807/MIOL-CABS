import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentSummaryScreen({ route, navigation }) {
  const {
    pickup,
    drop,
    scheduleDate,
    startTime,
    endTime,
    duration,
    monthlyPlan,
    fare,
  } = route.params;

  const tax = fare * 0.1;
  const total = fare + tax;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBanner}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Logo + Title */}
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/Img/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Payment Summary</Text>
      </View>

      <View style={styles.content}>
        {/* Trip Details */}
        <Text style={styles.sectionTitle}>Trip Details</Text>

        <View style={styles.tripRow}>
          <View style={styles.tripCol}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>{pickup}</Text>
          </View>

          <Text style={styles.arrow}>→</Text>

          <View style={styles.tripCol}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.value}>{drop}</Text>
          </View>
        </View>

        {/* Schedule */}
        <Text style={styles.sectionTitle}>Schedule</Text>
        <View style={styles.scheduleRow}>
          <View>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{scheduleDate}</Text>
          </View>
          <View>
            <Text style={styles.label}>Trip Start</Text>
            <Text style={styles.value}>{startTime}</Text>
          </View>
          <View>
            <Text style={styles.label}>Trip End</Text>
            <Text style={styles.value}>{endTime}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.changeBtn}>
          <Text style={styles.changeBtnText}>Change Schedule</Text>
        </TouchableOpacity>

        {/* Payment Details */}
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <View style={styles.paymentBox}>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Monthly Plan</Text>
            <Text style={styles.paymentValue}>₹ {monthlyPlan}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Selected Duration</Text>
            <Text style={[styles.paymentValue, { color: "#F59E0B" }]}>
              {duration}
            </Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Subtotal</Text>
            <Text style={styles.paymentValue}>₹ {fare}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Tax (10%)</Text>
            <Text style={styles.paymentValue}>₹ {tax}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.paymentRow}>
            <Text style={styles.totalLabel}>Total Payable</Text>
            <Text style={styles.totalValue}>₹ {total}</Text>
          </View>
        </View>

        {/* Pay Button */}
        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => navigation.navigate("PaymentSuccess")}
        >
          <Text style={styles.payBtnText}>Proceed To Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBanner: {
    backgroundColor: "#FBBF24",
    height: 160,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: "flex-start",
    padding: 20,
  },
  backBtn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  logoBox: {
    alignItems: "center",
    marginTop: -60,
  },
  logo: { width: 60, height: 60, resizeMode: "contain" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F59E0B",
    marginTop: 5,
  },
  content: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  tripRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  tripCol: { alignItems: "center", marginHorizontal: 10 },
  label: { fontSize: 13, color: "#888" },
  value: { fontSize: 14, fontWeight: "bold" },
  arrow: { fontSize: 20, color: "#F59E0B", marginHorizontal: 10 },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  changeBtn: {
    borderWidth: 1,
    borderColor: "#F59E0B",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  changeBtnText: { color: "#F59E0B", fontWeight: "bold" },
  paymentBox: {
    backgroundColor: "#FFF7E6",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  paymentLabel: { fontSize: 14, color: "#444" },
  paymentValue: { fontSize: 14, fontWeight: "600" },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: 8,
  },
  totalLabel: { fontSize: 15, fontWeight: "bold" },
  totalValue: { fontSize: 15, fontWeight: "bold", color: "#000" },
  payBtn: {
    backgroundColor: "#FBBF24",
    marginTop: 30,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  payBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
