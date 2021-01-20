import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputTwoCol = (props) => {
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => props.onChange(text)}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutInput: {
    marginTop: 15,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 10,
  },
  textInput: {
    height: 45,
    borderColor: '#dddddd',
    borderWidth: 1,
    width: 150,
  },
});

export default InputTwoCol;
