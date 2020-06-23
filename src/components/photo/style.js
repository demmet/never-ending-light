import {
  Dimensions,
  StyleSheet
} from 'react-native'

const screenWidth = Dimensions.get("screen").width

const styles = StyleSheet.create({
  photo: {
    height: screenWidth,
    width: screenWidth
  }
})

export default styles;
