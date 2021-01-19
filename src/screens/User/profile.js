import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';
const Profile = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginActions.userLogout());
  };
  const user = useSelector((state) => state.user.data);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.layoutHeader}>
          <Image
            style={styles.imageAvatar}
            source={{ uri: 'https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg' }}
          />
          <Text style={styles.textName}>{user.lastName + ' ' + user.firstName}</Text>
        </View>
        <View style={styles.layoutContainItem}>
          <View style={styles.layoutItem}>
            <Icon name="phone" size={20} color="#900" />
            <Text style={styles.textItem}>{user.phone}</Text>
          </View>
          <View style={styles.layoutItem}>
            <Icon name="envelope" size={20} color="#900" />
            <Text style={styles.textItem}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.layoutContainItemControl}>
          <View style={styles.layoutItemControl}>
            <Icon name="heart" size={25} color="#4295f5" />
            <Text style={styles.textItemControl}>Your Favorites</Text>
          </View>
          <View style={styles.layoutItemControl}>
            <Icon name="credit-card" size={25} color="#4295f5" />
            <Text style={styles.textItemControl}>Payment</Text>
          </View>
          <View style={styles.layoutItemControl}>
            <Icon name="users" size={25} color="#4295f5" />
            <Text style={styles.textItemControl}>Tell Your Friend</Text>
          </View>
          <View style={styles.layoutItemControl}>
            <Icon name="percent" size={25} color="#4295f5" />
            <Text style={styles.textItemControl}>Promotions</Text>
          </View>
          <View style={styles.layoutItemControl}>
            <Icon name="cog" size={25} color="#4295f5" />
            <Text style={styles.textItemControl}>Settings</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.layoutItemBottom} onPress={() => onLogout()}>
          <Icon name="power-off" size={25} color="red" />
          <Text style={styles.textItemBottom}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
  layoutHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageAvatar: { height: 100, width: 100, borderRadius: 50 },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 50,
    color: '#4245f5',
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
    color: '#4295f5',
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
