import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';

import Header from './src/components/header'
import Photo from './src/components/photo'

const info = [
  { id: 1, user: "Goku" },
  { id: 2, user: "Trunks" },
  { id: 3, user: "Vegeta" },
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={ info }
        keyExtractor={ (item) => item.id.toString() }
        renderItem={({ item }) =>
          <Fragment>
            <Header
              userName={ item.user }
              imagePath={ 'random.jpg' }
            />
            <Photo />
          </Fragment>
        }
      />      
    </ScrollView>
  );
}

export default App;
