import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/UserRedux/actions';
const Home = () => {
  const dispatch = useDispatch();
  const onPushProfile = () => {
    dispatch(userActions.userInfo());
  };
  return (
    <View style={styles.container}>
      <Text>WelCome to Dung x App </Text>
      <TouchableOpacity style={styles.button} onPress={() => onPushProfile()}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'gray',
  },
});

export default Home;
