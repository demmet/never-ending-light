import React, { Fragment } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from './style';

const Header = ({ userName, imagePath }) => {
  return (
    <View style={ styles.header }>
      <Image
        source={ require(`../../../assets/img/random.jpg`) }
        style={ styles.headerImage }
      />
      <Text style={ styles.headerText }>{ userName }</Text>
    </View>
  )
}

export default Header;