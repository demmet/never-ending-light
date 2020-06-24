import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from './style';

const Header = ({ userName, imageUrl }) => {
  return (
    <View style={ styles.header }>
      <Image
        source={{ uri: imageUrl }}
        style={ styles.headerImage }
      />
      <Text style={ styles.headerText }>{ userName }</Text>
    </View>
  )
}

export default Header;