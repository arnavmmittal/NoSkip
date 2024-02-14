// import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from 'react';

const No = () => {
    const navigation = useNavigation();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No, they won't.</Text>

      <ScrollView style={styles.commentSection}>
        {comments.map((c, index) => (
          <View key={index} style={styles.commentContainer}>
            <Text style={styles.commentText}>{c}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleCommentSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  commentSection: {
    flex: 1,
  },
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',  // Light gray
    paddingVertical: 10,
  },
  commentText: {
    fontSize: 16,
    color: '#2C3E50',  // Dark gray-blue
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BDC3C7',  // Light gray
    borderRadius: 5,
    padding: 10,
  },
  submitButton: {
    marginLeft: 10,
    backgroundColor: '#E74C3C',  // Red
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',  // White
    fontSize: 16,
  },

});

export default No;
