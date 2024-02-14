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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Yes from "./Yes";
import No from "./No";

const PollScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = (prediction) => {
    if (prediction === "yes") {
      navigation.navigate("Yes");
    } else if (prediction === "no") {
      navigation.navigate("No");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <Text style={styles.title}>D2S</Text>

      <View style={styles.topHalfContainer}>
        <Text style={styles.pollQuestion}>
          Will Travis and Taylor have sex if the Chiefs lose?
        </Text>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Taylor_Swift_%286966830273%29.jpg",
          }}
          style={styles.taylorImage}
          resizeMode="cover"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.yesButton]}
            onPress={() => handleButtonPress("yes")}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.noButton]}
            onPress={() => handleButtonPress("no")}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Poll">
      <HomeStack.Screen
        name="Poll"
        component={PollScreen}
        options={{
          headerMode: "none",
          headerVisible: false,
          header: null,
        }}
      />
      <HomeStack.Screen name="Yes" component={Yes} options={{
          headerMode: "none",
          headerVisible: false,
          header: null,
        }}/>
      <HomeStack.Screen name="No" component={No} />
    </HomeStack.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ecf0f1", // Light gray background
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingTop: "15%",
    paddingBottom: 10,
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50", // Darker color for the top half
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 0, // Adjusted margin top
  },
  pollQuestion: {
    fontSize: 24,
    textAlign: "center",
    color: "#ecf0f1", // Light gray text
    padding: 10,
    marginBottom: 20,
  },
  borderedBox: {
    borderWidth: 2,
    borderColor: "#3498db", // Blue border
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
  },
  yesButton: {
    backgroundColor: "#27ae60", // Green
  },
  noButton: {
    backgroundColor: "#e74c3c", // Red
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db", // Blue
    marginBottom: 20,
  },
  buttonText: {
    color: "#ecf0f1", // Light gray text
    fontSize: 16,
    textAlign: "center",
  },
  taylorImage: {
    width: "100%",
    height: 200, // Adjusted height
    borderRadius: 10,
    position: "relative",
  },
});

export {HomeStackScreen};

export default PollScreen;
