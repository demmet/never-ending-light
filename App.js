import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';

import fetchPhotos from './src/api/feed'
import { Header } from './src/components/Header';
import { Photo } from './src/components/Photo';

const App = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={ photos }
        keyExtractor={ (item) => item.id.toString() }
        style={{ marginTop: 20 }}
        renderItem={({ item }) =>
          <Fragment>
            <Header
              userName={ item.author }
              imageUrl={ item.download_url }
            />
            <Photo
              imageUrl={ item.download_url }
              description={ item.url }
              qtdLikes={ parseInt(item.height) }
            />
          </Fragment>
        }
      />      
    </ScrollView>
  );
}

export default App;
