import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Leaderboard = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Leaderboard Screen</Text>
      
    </View>
  );
};



export default Leaderboard;




// <View style={styles.bottomBar}>
//         <TouchableOpacity
//           style={styles.bottomBarButton}
//           onPress={() => navigation.navigate("Home")}
//         >
//           <Text style={styles.bottomBarButtonText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.bottomBarButton}
//           onPress={() => navigation.navigate("Leaderboard")}
//         >
//           <Text style={styles.bottomBarButtonText}>Leaderboard</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.bottomBarButton}
//           onPress={() => navigation.navigate("Settings")}
//         >
//           <Text style={styles.bottomBarButtonText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.bottomBarButton}
//           onPress={() => navigation.navigate("PointsDisplay")}
//         >
//           <Text style={styles.bottomBarButtonText}>Points</Text>
//         </TouchableOpacity>
//       </View>



// const styles = StyleSheet.create({
//     bottomBar: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         backgroundColor: "#7692FF", // Blue color for the bottom bar
//         padding: 15,
//         borderRadius: 15,
//         position: "relative",
//         bottom: 20,
//         left: 0,
//         right: 0,
//       },
//       bottomBarButton: {
//         flex: 1,
//         alignItems: "center",
//         height: 60,
//       },
//       bottomBarButtonText: {
//         color: "#ecf0f1", // Light gray text
//         fontSize: 18,
//       },
// });