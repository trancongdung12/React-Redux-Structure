import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Item from '../../components/InputItemForm';
import UserActions from '../../redux/UserRedux/actions';
import LogoutActions from '../../redux/LoginRedux/actions';
import { useDispatch } from 'react-redux';
import { NavigationUtils } from '../../navigation';
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeOldPassword = (text) => {
    setOldPassword(text);
  };

  const onChangeNewPassword = (text) => {
    setNewPassword(text);
  };

  const onChangeConfirmNewPassword = (text) => {
    setConfirmNewPassword(text);
  };

  const onCheckNewPassword = () => {
    if (newPassword === confirmNewPassword) {
      return true;
    } else {
      return false;
    }
  };

  const onChangePassword = () => {
    let data = {
      password: oldPassword,
      newPassword: newPassword,
    };
    if (onCheckNewPassword()) {
      dispatch(UserActions.userChangePassword(data));
      Alert.alert(
        'Message',
        'Thay đổi mật khẩu thành công!\n Bạn có muốn đăng xuất không?',
        [
          {
            text: 'Giữ đăng nhập',
            onPress: () => NavigationUtils.startProfile(),
            style: 'cancel',
          },
          { text: 'Đăng xuất', onPress: () => dispatch(LogoutActions.userLogout()) },
        ],
        { cancelable: false },
      );
    } else {
      Alert.alert('New password not match');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thay đổi mật khẩu</Text>
      <Item title="Mật khẩu cũ" isPass={true} onChange={onChangeOldPassword} />
      <Item title="Mật khẩu mới" isPass={true} onChange={onChangeNewPassword} />
      <Item title="Nhập lại mật khẩu mới" isPass={true} onChange={onChangeConfirmNewPassword} />
      <TouchableOpacity style={styles.loginButton} onPress={() => onChangePassword()}>
        <Text style={styles.textLogin}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
    width: 150,
    alignSelf: 'center',
  },
});
