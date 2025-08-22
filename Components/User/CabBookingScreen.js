import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Switch,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CabBookingScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("book"); // book | schedule

  // Common
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [fare, setFare] = useState(100);

  // Book trip states
  const [tripType, setTripType] = useState("Local");
  const [whatsapp, setWhatsapp] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  // Schedule trip states
  const [stops, setStops] = useState(["Stop 1", "Stop 2"]);
  const [returnTrip, setReturnTrip] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [scheduleType, setScheduleType] = useState("monthly");
  const [selectedDays, setSelectedDays] = useState(["All"]);
  const [showScheduleDate, setShowScheduleDate] = useState(false);
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const cars = [
    { id: "auto", name: "Auto", people: 4, price: 50, image: "data:image/jpeg;base64,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" },
    { id: "mini", name: "Mini", people: 4, price: 100, image: "data:image/jpeg;base64,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sdjBSwtOijNdqlZqefs0tZmsTboALakjhxnSW72x6eEw9PD0ySEBuze8zMSzu1uZYk+sju4FHZGEoilg6qXaxd2YdpUbqx+4DQXPUyZKwOoNxCvYnqUWVgIiICIiAiIgIiICIiAiIgIiIFJS09RA8WkN3s3GGJJemyo3QjS/mJNLRaBzZvZ7OMZSJcJ6rqp87cDINidlYpdDTM7KZb6GYTaW6eDrXLUgp6rp8uEDkU7Pq80MqMDU6TpLH+zCmb9nUHky/vEwdf2W1+XZH9b+IgaIOBfpKfQn6TdFX2XYv7CnyYS1f2Y4z818xA1B9DbpH0RptpvZljfzJnkezHG/mTA1R9EPSevohm2F9luNP5L5iXCeyfGH6qj9YQNQDCGfRcGZuWn7I8TzNMfrS8peyCpzq0/n/CBpFcEZ9F2eZvmj7IkHvVh6LMjh/ZZhR7zsfIWgc/UtlMeUyOF2O3IGdCYbcDAr9Vj5mZOhuvg04UV9dYGh8BsWppYH0vNn7jJtCnZchNLnn0t5GTqhgKKe7TQeSiXFoFBPURAREQEREBERAREQEREBERAREQEREBERAREQFpS0rEClotKxApaLSsQKWi0rEClotKxAWi0RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z" },
    { id: "suv", name: "SUV", people: 6, price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZShLiNfIfKKngVrGwGY9kuHcIQ-_vMv6WzA&s" },
  ];

  const handleCarSelect = (car) => {
    setSelectedCar(car.id);
    setFare(car.price);
  };

  const toggleDay = (day) => {
    if (day === "All") {
      setSelectedDays(["All"]);
    } else {
      let updated = [...selectedDays];
      if (updated.includes("All")) updated = [];
      if (updated.includes(day)) updated = updated.filter((d) => d !== day);
      else updated.push(day);
      setSelectedDays(updated);
    }
  };

  const handleBooking = () => {
    if (activeTab === "book") {
      if (!pickup || !drop || !whatsapp || !selectedCar) {
        Alert.alert("Error", "Please fill all fields and select a car.");
        return;
      }
      navigation.navigate("BookingConfirmed", {
        tripType,
        pickup,
        drop,
        date: date.toDateString(),
        time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        whatsapp,
        car: selectedCar,
        fare,
      });
    } else {
      navigation.navigate("PaymentSummary", {
        pickup,
        drop,
        stops,
        returnTrip,
        passengers,
        days: selectedDays.join(", "),
        scheduleDate: scheduleDate.toDateString(),
        startTime: startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        endTime: endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        scheduleType,
        car: selectedCar,
        fare,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.topBanner}>
        <Image source={require("../../assets/Img/Logo.png")} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Tabs */}
      <View style={styles.headerTabs}>
        <TouchableOpacity onPress={() => setActiveTab("book")}>
          <Text style={[styles.headerTab, activeTab === "book" && styles.activeHeaderTab]}>
            Book Your Trip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("schedule")}>
          <Text style={[styles.headerTab, activeTab === "schedule" && styles.activeHeaderTab]}>
            Schedule Trip
          </Text>
        </TouchableOpacity>
      </View>

      {/* Book Trip UI */}
      {activeTab === "book" && (
        <View>
          <View style={styles.tabRow}>
            {["Local", "One Way"].map((t) => (
              <TouchableOpacity key={t} style={[styles.tab, tripType === t && styles.activeTab]} onPress={() => setTripType(t)}>
                <Text style={[styles.tabText, tripType === t && styles.activeTabText]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Pick Up Location</Text>
          <View style={styles.inputRow}>
            <TextInput placeholder="Enter pickup location" style={styles.input} value={pickup} onChangeText={setPickup} />
            <MaterialIcons name="location-pin" size={22} color="green" />
          </View>

          <Text style={styles.label}>Drop Off Location</Text>
          <View style={styles.inputRow}>
            <TextInput placeholder="Enter drop location" style={styles.input} value={drop} onChangeText={setDrop} />
            <MaterialIcons name="location-pin" size={22} color="red" />
          </View>

          <Text style={styles.label}>Date Of Travel</Text>
          <TouchableOpacity style={styles.inputRow} onPress={() => setShowDate(true)}>
            <Text style={styles.placeholder}>{date.toDateString()}</Text>
            <MaterialIcons name="date-range" size={22} color="black" />
          </TouchableOpacity>
          {showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDate(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          <Text style={styles.label}>Pick Up Time</Text>
          <TouchableOpacity style={styles.inputRow} onPress={() => setShowTime(true)}>
            <Text style={styles.placeholder}>
              {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Text>
            <MaterialIcons name="access-time" size={22} color="black" />
          </TouchableOpacity>
          {showTime && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowTime(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          )}

          <Text style={styles.label}>WhatsApp Number</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Enter WhatsApp number"
              keyboardType="phone-pad"
              style={styles.input}
              value={whatsapp}
              onChangeText={setWhatsapp}
            />
            <FontAwesome name="whatsapp" size={22} color="green" />
          </View>
        </View>
      )}

      {/* Schedule Trip UI */}
      {activeTab === "schedule" && (
        <View>
          <View style={styles.inputRow}>
            <MaterialIcons name="location-pin" size={22} color="green" />
            <TextInput placeholder="Starting Point" style={styles.input} value={pickup} onChangeText={setPickup} />
          </View>

          {stops.map((stop, index) => (
            <View style={styles.inputRow} key={index}>
              <MaterialIcons name="stop-circle" size={22} color="black" />
              <TextInput placeholder={`Stop ${index + 1}`} style={styles.input} value={stop} onChangeText={(txt) => {
                const updated = [...stops];
                updated[index] = txt;
                setStops(updated);
              }} />
            </View>
          ))}
          <TouchableOpacity onPress={() => setStops([...stops, ""])} style={styles.addStopBtn}>
            <Text style={styles.addStopText}>+ Add Stops</Text>
          </TouchableOpacity>

          <View style={styles.inputRow}>
            <MaterialIcons name="location-pin" size={22} color="red" />
            <TextInput placeholder="Ending Point" style={styles.input} value={drop} onChangeText={setDrop} />
          </View>

          <View style={[styles.inputRow, { justifyContent: "space-between" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="person" size={22} color="black" />
              <Text style={{ marginLeft: 8, fontSize: 16 }}>Passengers</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => setPassengers(Math.max(1, passengers - 1))}>
                <Text style={styles.counterBtn}>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{passengers}</Text>
              <TouchableOpacity onPress={() => setPassengers(passengers + 1)}>
                <Text style={styles.counterBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inputRow, { justifyContent: "space-between" }]}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Return</Text>
            <Switch value={returnTrip} onValueChange={setReturnTrip} />
          </View>

          {/* Days */}
          <Text style={styles.label}>Choose your Schedule</Text>
          <View style={styles.daysRow}>
            {["All", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <TouchableOpacity
                key={day}
                style={[styles.dayBox, selectedDays.includes(day) && styles.activeDayBox]}
                onPress={() => toggleDay(day)}
              >
                <Text style={{ fontSize: 12, color: selectedDays.includes(day) ? "#fff" : "#000" }}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.tabRow}>
            {["monthly", "yearly", "custom"].map((t) => (
              <TouchableOpacity key={t} style={[styles.tab, scheduleType === t && styles.activeTab]} onPress={() => setScheduleType(t)}>
                <Text>{t.charAt(0).toUpperCase() + t.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.inputRow} onPress={() => setShowScheduleDate(true)}>
            <MaterialIcons name="date-range" size={22} color="black" />
            <Text style={styles.placeholder}>{scheduleDate.toDateString()}</Text>
          </TouchableOpacity>
          {showScheduleDate && (
            <DateTimePicker
              value={scheduleDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowScheduleDate(false);
                if (selectedDate) setScheduleDate(selectedDate);
              }}
            />
          )}

          {/* Start Time */}
          <Text style={styles.label}>Start Time</Text>
          <TouchableOpacity style={styles.inputRow} onPress={() => setShowStartTime(true)}>
            <Text style={styles.placeholder}>
              {startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Text>
            <MaterialIcons name="access-time" size={22} color="black" />
          </TouchableOpacity>
          {showStartTime && (
            <DateTimePicker
              value={startTime}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowStartTime(false);
                if (selectedTime) setStartTime(selectedTime);
              }}
            />
          )}

          {/* End Time */}
          <Text style={styles.label}>End Time</Text>
          <TouchableOpacity style={styles.inputRow} onPress={() => setShowEndTime(true)}>
            <Text style={styles.placeholder}>
              {endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Text>
            <MaterialIcons name="access-time" size={22} color="black" />
          </TouchableOpacity>
          {showEndTime && (
            <DateTimePicker
              value={endTime}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowEndTime(false);
                if (selectedTime) setEndTime(selectedTime);
              }}
            />
          )}
        </View>
      )}

      {/* Cars */}
      <Text style={styles.label}>Choose your vehicle</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cars.map((car) => (
          <TouchableOpacity
            key={car.id}
            style={[styles.carCard, selectedCar === car.id && styles.activeCarCard]}
            onPress={() => handleCarSelect(car)}
          >
            <Image source={{ uri: car.image }} style={styles.carImage} />
            <Text style={styles.carName}>{car.name}</Text>
            <View style={styles.peopleBadge}>
              <Ionicons name="people" size={14} color="black" />
              <Text style={styles.peopleText}>{car.people} people</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Fare */}
      <Text style={styles.fareText}>
        Total Fare - ₹{fare} <Text style={styles.viewDetails}>View Details</Text>
      </Text>

      {/* Submit */}
      <TouchableOpacity style={styles.bookBtn} onPress={handleBooking}>
        <Text style={styles.bookBtnText}>{activeTab === "book" ? "Book Now" : "Schedule Now"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBanner: {
    backgroundColor: "#FBBF24",
    height: 100,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 120, height: 50 },
  headerTabs: { flexDirection: "row", justifyContent: "space-around", marginVertical: 15 },
  headerTab: { fontSize: 16, color: "#333" },
  activeHeaderTab: {
    fontSize: 16,
    color: "#FBBF24",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  tabRow: { flexDirection: "row", marginBottom: 20, paddingHorizontal: 20 },
  tab: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#FBBF24" },
  tabText: { fontSize: 16 },
  activeTabText: { fontWeight: "bold" },
  label: { fontSize: 15, marginBottom: 5, marginTop: 10, fontWeight: "500", paddingHorizontal: 20 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  input: { flex: 1, fontSize: 16 },
  placeholder: { flex: 1, fontSize: 16, color: "#555", marginLeft: 8 },
  addStopBtn: { alignSelf: "flex-end", marginRight: 20, marginBottom: 10 },
  addStopText: { color: "orange", fontWeight: "bold" },
  counterBtn: {
    fontSize: 18,
    width: 28,
    height: 28,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 50,
  },
  daysRow: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: 20, marginBottom: 15 },
  dayBox: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 4,
  },
  activeDayBox: { backgroundColor: "#FBBF24", borderColor: "#FBBF24" },
  carCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginRight: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginLeft: 20,
  },
  activeCarCard: { borderWidth: 2, borderColor: "#FBBF24" },
  carName: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  carImage: { width: 120, height: 70, resizeMode: "contain", marginBottom: 8 },
  peopleBadge: { flexDirection: "row", backgroundColor: "#FBBF24", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" },
  peopleText: { fontSize: 12, marginLeft: 4 },
  fareText: { fontSize: 16, fontWeight: "bold", paddingHorizontal: 20, marginTop: 20 },
  viewDetails: { fontSize: 12, color: "#FBBF24", fontWeight: "500" },
  bookBtn: { backgroundColor: "#FBBF24", margin: 20, borderRadius: 12, padding: 15, alignItems: "center", marginBottom: 40 },
  bookBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});