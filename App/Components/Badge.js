import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48bbec',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 18,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
});

class Badge extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
          <Text style={styles.name}>{this.props.userInfo.name}</Text>
          <Text style={styles.handle}>{this.props.userInfo.login}</Text>
        </View>
    );
  }
};

Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default Badge;
