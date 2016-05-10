import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import api from '../Utils/api';

import Profile from './Profile';
import Repositories from './Repositories';
import Notes from './Notes';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component {
  makeBackground(btn) {
    const style = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      style.backgroundColor = '#48bbec';
    } else if (btn === 1) {
      style.backgroundColor = '#e77aae';
    } else {
      style.backgroundColor = '#758bf4';
    }
    return style;
  }
  goToProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile',
      passProps: {userInfo: this.props.userInfo}
    });
  }
  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'Repos',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }
  goToNotes() {
    api.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {}
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            userInfo: this.props.userInfo,
            notes: res
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
        <View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
          <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="#88d4f5">
              <Text style={styles.buttonText}>View Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToRepos.bind(this)}
            underlayColor="#88d4f5">
              <Text style={styles.buttonText}>View Repos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes.bind(this)}
            underlayColor="#88d4f5">
              <Text style={styles.buttonText}>Notes</Text>
          </TouchableHighlight>
        </View>
    );
  }
};

export default Dashboard;
