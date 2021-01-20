import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';
import { NavigationUtils } from '../../navigation';
import { Images, Colors } from '../../themes';
const Item = (props) => {
  return (
    <TouchableOpacity style={styles.layoutItemControl} onPress={() => props.onPressItem()}>
      <Icon name={props.name} size={25} color={Colors.blueSky} />
      <Text style={styles.textItemControl}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(LoginActions.userLogout());
  };

  const onChangePassword = () => {
    NavigationUtils.push({
      screen: 'ChangePassword',
    });
  };

  const onPushToEditProfileScreen = () => {
    NavigationUtils.push({
      screen: 'EditProfile',
    });
  };

  const user = useSelector((state) => state.user.data);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => NavigationUtils.push({ screen: 'Home' })}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableWithoutFeedback>
      <View>
        <View style={styles.layoutHeader}>
          <Image
            style={styles.imageAvatar}
            source={user.avatar ? { uri: user.avatar } : Images.imgDefaultAvatar}
          />
          <Text style={styles.textName}>{user.lastName + ' ' + user.firstName}</Text>
        </View>
        <View style={styles.layoutContainItem}>
          <View style={styles.layoutItem}>
            <Icon name="phone" size={20} color={Colors.redBull} />
            <Text style={styles.textItem}>{user.phone}</Text>
          </View>
          <View style={styles.layoutItem}>
            <Icon name="envelope" size={20} color={Colors.redBull} />
            <Text style={styles.textItem}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.layoutContainItemControl}>
          <Item name="heart" text="Yêu thích" />
          <Item name="users" text="Bạn bè" />
          <Item
            name="edit"
            text="Sửa thông tin tài khoản"
            onPressItem={onPushToEditProfileScreen}
          />
          <Item name="lock" onPressItem={onChangePassword} text="Đổi mật khẩu" />
          <Item name="cog" text="Cài đặt" />
        </View>
        <TouchableOpacity style={styles.layoutItemBottom} onPress={() => onLogout()}>
          <Icon name="power-off" size={25} color="red" />
          <Text style={styles.textItemBottom}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  layoutHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  imageAvatar: { height: 100, width: 100, borderRadius: 50 },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 50,
    color: Colors.blueSky,
  },
  layoutContainItem: {
    paddingHorizontal: 30,
  },
  layoutItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textItem: {
    marginLeft: 15,
    marginTop: 0,
  },
  layoutContainItemControl: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  layoutItemControl: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  textItemControl: {
    fontSize: 15,
    marginTop: 0,
    marginLeft: 10,
    color: Colors.blueSky,
  },
  layoutItemBottom: {
    marginLeft: 30,
    marginTop: 20,
    flexDirection: 'row',
  },
  textItemBottom: {
    fontSize: 15,
    marginTop: 0,
    marginLeft: 10,
    fontWeight: '700',
    color: 'red',
  },
});

export default Profile;
