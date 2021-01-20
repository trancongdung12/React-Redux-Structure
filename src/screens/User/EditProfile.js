import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Item from '../../components/InputItemForm';
import ItemCol from '../../components/InputTwoColumn';
import { useSelector, useDispatch } from 'react-redux';
import UserActions from '../../redux/UserRedux/actions';
import { NavigationUtils } from '../../navigation';
const EditProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [avatar, setAvatar] = useState(user.avatar);
  const [birthday, setBirthday] = useState(user.birthDay);
  const [gender, setGender] = useState(user.gender);
  const [phone, setPhone] = useState(user.phone);

  const onChangeLastName = (text) => {
    setLastName(text);
  };

  const onChangeFirstName = (text) => {
    setFirstName(text);
  };

  const onChangeAvatar = (text) => {
    setAvatar(text);
  };

  const onChangeBirthDay = (text) => {
    setBirthday(text);
  };

  const onChangeGender = (text) => {
    setGender(text);
  };

  const onChangePhone = (text) => {
    setPhone(text);
  };

  const onChangeProfile = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      avatar: avatar,
      phone: phone,
      gender: gender,
      birthDay: birthday,
    };
    dispatch(UserActions.userEdit(data));
    Alert.alert(' Thay đổi thông tin thành công <3 ');
    NavigationUtils.startMainContent();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>
      <View style={styles.layoutTextInput}>
        <View style={styles.layoutTextRow}>
          <ItemCol title="Họ" value={lastName} onChange={onChangeLastName} />
          <ItemCol title="Tên" value={firstName} onChange={onChangeFirstName} />
        </View>
        <Item title="Ảnh đại diện" value={avatar} onChange={onChangeAvatar} />
        <Item title="Ngày sinh" value={birthday} onChange={onChangeBirthDay} />
        <Item title="Giới tính" value={gender} onChange={onChangeGender} />
        <Item title="Số điện thoại" value={phone} onChange={onChangePhone} />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => onChangeProfile()}>
        <Text style={styles.textLogin}>Thay đổi thông tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  layoutTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
    width: 200,
    alignSelf: 'center',
  },
  textLogin: {
    textAlign: 'center',
  },
});

export default EditProfile;
