import React, { Fragment, useState } from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './style'

const Photo = ({ imageUrl, description, qtdLikes }) => {
  const [liked, setLiked] = useState(false)
  const [numLikes, setNumLikes] = useState(qtdLikes)

  const likePhoto = () => {
    let newTotal;
    if (liked) {
      newTotal = numLikes - 1;
    } else {
      newTotal = numLikes + 1;
    }

    setNumLikes(newTotal);
    setLiked(!liked);
  }

  return (
    <Fragment>
      <Image 
        source={{ uri: imageUrl }}
        style={ styles.photo }
      />
      <Text>{ description }</Text>
      <TouchableOpacity onPress={ likePhoto }>
        <View style={ styles.likeView }>
          <Image
            source={ ImgLiked(liked) }
            style={ styles.like }
          />
          <Text>{ numLikes }</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  )
}

const ImgLiked = (liked) => {
  if (liked) {
    return require('../../../assets/img/red-heart.png')
  } else {
    return require('../../../assets/img/black-heart.png')
  }
}

export default Photo;