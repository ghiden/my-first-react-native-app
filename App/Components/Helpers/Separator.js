import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#e4e4e4',
    flex: 1,
    marginLeft: 15
  }
});

const Separator = () => {
  return (
      <View style={styles.separator}>
      </View>
  );
};

export default Separator;
