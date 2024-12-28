import React from 'react';
import { View } from 'react-native';
import ClassComponent from './src/components/ClassComponents';
import FunctionalComponent from './src/components/FunctionalComponents';
import BasicComponents from './src/Basic/BasicComponents';
import Hooks from './src/Hooks/Hooks';
import JavaScript from './src/JS/JavaScript';
import FinalHW from './src/components/FinalHW';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <BasicComponents /> */}
      {/* <Hooks /> */}
      {/* <JavaScript /> */}
      <FinalHW />
    </View>
  )
}
export default App;