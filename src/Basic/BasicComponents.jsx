import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;
const scale = Dimensions.get('window').scale;

console.log("Dimensions: ", screenHeight, screenWidth, fontScale, scale);

const BasicComponents = () => {

    const onLayout = (e) => {
        console.log(e.nativeEvent);
    }

  return (
    <View onLayout={onLayout} style={styles.container}>
        <SafeAreaView />
      <Text>BasicComponents</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'lightblue',
    }
})

export default BasicComponents;