import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ridesData = {
  history: [
    {
      id: "1",
      dateGroup: "Today",
      driver: "Venkat Raman",
      car: "Hyundai i20",
      seats: 4,
      from: "Anna Nagar",
      to: "T.Nagar",
      tripType: "One Way Trip",
      status: "Completed",
      date: "4 July 2025, 5:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.png",
    },
    {
      id: "2",
      dateGroup: "Yesterday",
      driver: "Arun M",
      car: "Hyundai i20",
      seats: 4,
      from: "GH",
      to: "Bus stand",
      tripType: "One Way Trip",
      status: "Completed",
      date: "10 July 2025, 4:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/22/22/red-car-1281692_960_720.jpg",
    },
    {
      id: "3",
      dateGroup: "Last Month",
      driver: "Karthik P",
      car: "Toyota Etios",
      seats: 4,
      from: "Central",
      to: "Airport",
      tripType: "Round Trip",
      status: "Completed",
      date: "15 June 2025, 7:00 PM",
      image:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
    },
    {
      id: "4",
      dateGroup: "Last Month",
      driver: "Suresh Kumar",
      car: "Maruti Dzire",
      seats: 4,
      from: "Perungudi",
      to: "Tambaram",
      tripType: "One Way Trip",
      status: "Completed",
      date: "20 June 2025, 3:15 PM",
      image:
        "https://cdn.pixabay.com/photo/2018/05/23/22/36/car-3426125_960_720.png",
    },
  ],

  upcoming: [
    {
      id: "5",
      dateGroup: "Today",
      driver: "Venkat Raman",
      car: "Hyundai i20",
      seats: 4,
      from: "Anna Nagar",
      to: "T.Nagar",
      tripType: "One Way Trip",
      status: "Upcoming",
      date: "4 July 2025, 5:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.png",
    },
    {
      id: "6",
      dateGroup: "Yesterday",
      driver: "Arun M",
      car: "Hyundai i20",
      seats: 4,
      from: "GH",
      to: "Bus stand",
      tripType: "Round Trip",
      status: "Upcoming",
      date: "10 July 2025, 4:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/22/22/red-car-1281692_960_720.jpg",
    },
  ],

  scheduled: [
    {
      id: "7",
      dateGroup: "Today",
      driver: "Venkat Raman",
      car: "Hyundai i20",
      seats: 4,
      from: "Anna Nagar",
      to: "T.Nagar",
      tripType: "One Way Trip",
      status: "Scheduled (4 Days Remaining)",
      date: "4 July 2025, 5:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.png",
    },
    {
      id: "8",
      dateGroup: "Yesterday",
      driver: "Arun M",
      car: "Hyundai i20",
      seats: 4,
      from: "GH",
      to: "Bus stand",
      tripType: "Round Trip",
      status: "Scheduled (6 Days Remaining)",
      date: "10 July 2025, 4:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/22/22/red-car-1281692_960_720.jpg",
    },
    {
      id: "9",
      dateGroup: "Last Month",
      driver: "Karthik P",
      car: "Toyota Etios",
      seats: 4,
      from: "Central",
      to: "Airport",
      tripType: "Round Trip",
      status: "Scheduled (20 Days Remaining)",
      date: "15 June 2025, 7:00 PM",
      image:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
    },
    {
      id: "10",
      dateGroup: "Last Month",
      driver: "Suresh Kumar",
      car: "Maruti Dzire",
      seats: 4,
      from: "Perungudi",
      to: "Tambaram",
      tripType: "One Way Trip",
      status: "Scheduled (25 Days Remaining)",
      date: "20 June 2025, 3:15 PM",
      image:
        "https://cdn.pixabay.com/photo/2018/05/23/22/36/car-3426125_960_720.png",
    },
    {
      id: "11",
      dateGroup: "Last Month",
      driver: "Manoj S",
      car: "Honda City",
      seats: 4,
      from: "Adyar",
      to: "OMR",
      tripType: "Round Trip",
      status: "Scheduled (30 Days Remaining)",
      date: "22 June 2025, 6:45 PM",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
    },
    {
      id: "12",
      dateGroup: "Last Month",
      driver: "Rajesh",
      car: "Ford Aspire",
      seats: 4,
      from: "Guindy",
      to: "Velachery",
      tripType: "One Way Trip",
      status: "Scheduled (35 Days Remaining)",
      date: "25 June 2025, 2:30 PM",
      image:
        "https://cdn.pixabay.com/photo/2018/01/03/19/09/car-3056581_960_720.jpg",
    },
  ],
};

export default function MyRidesScreen() {
  const [activeTab, setActiveTab] = useState("history");

  const renderBadge = (text) => (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );

  const renderRideCard = (item) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.driverText}>Driver : {item.driver}</Text>
        <Text style={styles.carText}>
          {item.car} | {item.seats} Seater
        </Text>

        {/* Route */}
        <Text style={styles.routeText}>
          <Text style={{ fontWeight: "600" }}>{item.from}</Text> ➝{" "}
          <Text style={{ fontWeight: "600" }}>{item.to}</Text>
        </Text>

        {/* Trip Type */}
        {renderBadge(item.tripType)}

        {/* Status */}
        <Text style={[styles.status, getStatusStyle(item.status)]}>
          {item.status}
        </Text>

        {/* Date */}
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  const renderSection = (title, data) =>
    data.length > 0 && (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {title === "Today" && (
            <Ionicons name="filter" size={18} color="#f9a825" />
          )}
        </View>
        {data.map((ride) => (
          <View key={ride.id}>{renderRideCard(ride)}</View>
        ))}
      </View>
    );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://i.postimg.cc/Zq8bWRjB/logo.png" }}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Your Rides</Text>

      <View style={styles.tabRow}>
        {["history", "upcoming", "scheduled"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab === "history"
                ? "Ride History"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSection(
          "Today",
          ridesData[activeTab].filter((r) => r.dateGroup === "Today")
        )}
        {renderSection(
          "Yesterday",
          ridesData[activeTab].filter((r) => r.dateGroup === "Yesterday")
        )}
        {renderSection(
          "Last Month",
          ridesData[activeTab].filter((r) => r.dateGroup === "Last Month")
        )}
      </ScrollView>
    </View>
  );
}

const getStatusStyle = (status) => {
  if (status.includes("Completed"))
    return { color: "green", fontWeight: "bold" };
  if (status.includes("Upcoming"))
    return { color: "#FBBF24", fontWeight: "bold" };
  if (status.includes("Scheduled"))
    return { color: "#007bff", fontWeight: "bold" };
  return {};
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topHeader: {
    backgroundColor: "#FBBF24",
    height: 130,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: { position: "absolute", left: 15, top: 40 },
  logo: { width: 80, height: 80, resizeMode: "contain" },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
    color: "#FBBF24",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTabButton: { backgroundColor: "#FBBF24" },
  tabText: { fontSize: 14, fontWeight: "600", color: "#555" },
  activeTabText: { color: "#fff" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 8,
    color: "#444",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff8e1",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: { width: 80, height: 55, borderRadius: 8 },
  driverText: { fontSize: 14, fontWeight: "600", color: "#222" },
  carText: { fontSize: 13, color: "#555" },
  routeText: { fontSize: 14, marginVertical: 2, color: "#333" },
  status: { fontSize: 14, marginTop: 5 },
  date: { fontSize: 12, color: "#777", marginTop: 2 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#fff3cd",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#F57C00",
  },
});
