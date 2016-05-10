import React from 'react';

import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6ef',
    flexDirection: 'column'
  }
});

const WView = (props) => {
  return (
      <View style={styles.container}>
        <WebView source={{uri: props.url}} />
      </View>
  );
}

WView.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default WView;
