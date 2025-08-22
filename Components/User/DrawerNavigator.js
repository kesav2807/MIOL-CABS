import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import CabBookingScreen from "./CabBookingScreen";
import RideHistoryScreen from "./RideHistoryScreen";
import SavedLocationsScreen from "./SavedLocationsScreen";
import HelpSupportScreen from "./HelpSupportScreen";
import EditProfileScreen from "./EditProfileScreen";


const Drawer = createDrawerNavigator();

// ✅ Custom Drawer UI
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Nivetha</Text>
        <Text style={styles.profileEmail}>nivethakumar@gmail.com</Text>

        {/* ✅ Navigate to Edit Profile */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => props.navigation.navigate("Edit Profile")}
        >
          <Text style={styles.editText}>✏️ Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <DrawerItem
        label="Basic Information"
        labelStyle={styles.drawerLabel}
        icon={() => <Ionicons name="person-outline" size={20} color="#000" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Ride History"
        labelStyle={styles.drawerLabel}
        icon={() => <Ionicons name="time-outline" size={20} color="#000" />}
        onPress={() => props.navigation.navigate("Ride History")}
      />
      <DrawerItem
        label="Saved Location"
        labelStyle={styles.drawerLabel}
        icon={() => <Ionicons name="location-outline" size={20} color="#000" />}
        onPress={() => props.navigation.navigate("Saved Locations")}
      />
      <DrawerItem
        label="Help & Support"
        labelStyle={styles.drawerLabel}
        icon={() => <Ionicons name="help-circle-outline" size={20} color="#000" />}
        onPress={() => props.navigation.navigate("Help & Support")}
      />
      <DrawerItem
        label="Log Out"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="logout" size={20} color="#000" />}
        onPress={() => props.navigation.navigate("Login")} // ✅ Navigate to Login
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={CabBookingScreen} />
      <Drawer.Screen name="Ride History" component={RideHistoryScreen} />
      <Drawer.Screen name="Saved Locations" component={SavedLocationsScreen} />
      <Drawer.Screen name="Help & Support" component={HelpSupportScreen} />
      <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
     
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  editButton: {
    marginTop: 8,
  },
  editText: {
    fontSize: 12,
    color: "#f4a100",
    fontWeight: "bold",
  },
  drawerLabel: {
    fontSize: 15,
    marginLeft: -10,
  },
});
