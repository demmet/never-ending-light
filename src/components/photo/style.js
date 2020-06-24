import {
  Dimensions,
  StyleSheet
} from 'react-native'

const screenWidth = Dimensions.get("screen").width

const styles = StyleSheet.create({
  photo: {
    height: screenWidth,
    width: screenWidth
  },
  like: {
    height: 40,
    margin: 10,
    width: 40
  },
  likeView: {
    alignItems: "center",
    flexDirection: "row"
  }
})

export default styles;
