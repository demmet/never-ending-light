import React, { Fragment } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';

import { Header } from './src/components/Header'
import { Photo } from './src/components/Photo'

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
            />
            <Photo />
          </Fragment>
        }
      />      
    </ScrollView>
  );
}

export default App;
