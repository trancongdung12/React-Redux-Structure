import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';
const Home = (props) => {
  //const firstName = useSelector((state) => state.login.loginResponse.email);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginActions.userLogout());
  };
  return (
    <View style={styles.container}>
      <Text>WelCome to Dung x App</Text>
      <TouchableOpacity style={styles.button} onPress={() => onLogout()}>
        <Text>Logout</Text>
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
