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

const PointsDisplay = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Points Display Screen</Text>
      {/* Add your content here */}
      
    </View>
  );
};


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

export default PointsDisplay;
