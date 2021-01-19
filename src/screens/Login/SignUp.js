/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import ItemInput from '../../components/InputItemForm';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import closeImg from '../../assets/Images/mtp.png';
import LoginActions from '../../redux/LoginRedux/actions';

const SignUp = (props) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isLoading = useSelector((state) => state.login.loadingLogin);
  const dispatch = useDispatch();
  const onCheckPasswordValid = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const onHandleRegister = () => {
    if (onCheckPasswordValid()) {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        birthDay: '2000-01-01',
      };
      dispatch(LoginActions.userRegister(data));
    } else {
      Alert.alert('Error', 'Password not match');
    }
  };
  const onChangeLastName = (text) => {
    setLastName(text);
  };
  const onChangeFirstName = (text) => {
    setFirstName(text);
  };
  const onChangeEmail = (text) => {
    setEmail(text);
  };
  const onChangePhone = (text) => {
    setPhone(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };
  const onChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
  };
  const onClose = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeImage} source={closeImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <ItemInput title="Họ*" value={lastName} onChange={onChangeLastName} />
      <ItemInput title="Tên*" value={firstName} onChange={onChangeFirstName} />
      <ItemInput title="Email*" value={email} onChange={onChangeEmail} />
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute', top: 300, left: 150 }}
          size="large"
          color="#25969E"
        />
      )}
      <ItemInput title="Số điện thoại*" value={phone} onChange={onChangePhone} />
      <ItemInput title="Mật khẩu*" isPass={true} value={password} onChange={onChangePassword} />
      <ItemInput
        title="Xác nhân mật khẩu*"
        isPass={true}
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
      />

      <View style={styles.layoutButton}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Login',
              },
            })
          }
        >
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={onHandleRegister}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với
        <Text style={{ color: '#25969E' }}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  layoutTitle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 25,
    marginLeft: '32%',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 15,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
  },
});
