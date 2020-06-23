import React, { Fragment } from 'react';

import {
  Image,
  Text
} from 'react-native';

import styles from './style'

const Photo = () => {
  return (
    <Fragment>
      <Image 
        source={ require('../../../assets/img/random.jpg') }
        style={ styles.photo }
      />
      <Text>Description</Text>
    </Fragment>
  )
}

export default Photo;