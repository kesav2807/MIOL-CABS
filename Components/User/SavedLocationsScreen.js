import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SavedLocationsScreen() {
  const [locations, setLocations] = useState([
    { id: "1", type: "Home", address: "45, 3rd Cross, Vellore" },
    { id: "2", type: "Office", address: "45, 3rd Cross, Vellore" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [editId, setEditId] = useState(null);

  
  const handleSave = () => {
    if (!pickup || !dropoff) return;

    if (editId) {
      setLocations((prev) =>
        prev.map((loc) =>
          loc.id === editId ? { ...loc, type: pickup, address: dropoff } : loc
        )
      );
      setEditId(null);
    } else {
      setLocations((prev) => [
        ...prev,
        { id: Date.now().toString(), type: pickup, address: dropoff },
      ]);
    }

    setPickup("");
    setDropoff("");
    setModalVisible(false);
  };

  
  const handleEdit = (item) => {
    setPickup(item.type);
    setDropoff(item.address);
    setEditId(item.id);
    setModalVisible(true);
  };


  const handleDelete = (id) => {
    setLocations((prev) => prev.filter((loc) => loc.id !== id));
  };

  const renderLocation = ({ item }) => (
    <View style={styles.locationRow}>
      <Ionicons
        name={item.type === "Home" ? "home" : "business"}
        size={22}
        color="#f5a623"
        style={styles.icon}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>

      <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionBtn}>
        <MaterialIcons name="edit" size={20} color="#f5a623" />
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionBtn}>
        <MaterialIcons name="delete" size={20} color="red" />
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Saved Locations</Text>
      </View>

      
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={renderLocation}
        contentContainerStyle={{ padding: 16 }}
      />

      
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addBtnText}>Add New Location</Text>
      </TouchableOpacity>

   
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {editId ? "Edit Location" : "Add New Location"}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Pick Up Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Pickup Location"
              value={pickup}
              onChangeText={setPickup}
            />

            <Text style={styles.label}>Drop Off Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Dropoff Location"
              value={dropoff}
              onChangeText={setDropoff}
            />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>Save Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#f1cf39c9",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  icon: { marginRight: 10 },
  title: { fontSize: 16, fontWeight: "700" },
  address: { fontSize: 13, color: "#666" },
  actionBtn: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  editText: { fontSize: 13, color: "#eec52eff", marginLeft: 4 },
  deleteText: { fontSize: 13, color: "red", marginLeft: 4 },
  addBtn: {
    backgroundColor: "rgba(245, 228, 35, 1)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 20,
  },
  addBtnText: { color: "#fff", fontWeight: "700" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "90%",
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  modalTitle: { fontSize: 18, fontWeight: "700" },
  label: { fontSize: 14, fontWeight: "600", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 6,
  },
  saveBtn: {
    backgroundColor: "#f5a623",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveBtnText: { color: "#fff", fontWeight: "700" },
});
