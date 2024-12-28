import { View, Text } from 'react-native'
import React from 'react'

const LetVarConst = () => {
    // using let for a variable that will be reassigned
    let version = 'ES6';
    version = 'ES7';

    // using Var (not recommended in modern JavaScript)
    var scopeText = 'This variable is function-scoped';

    // using const for a variable that will not be reassigned
    const language = 'JavaScript';

  return (
    <View>
      <Text>Version: {version}</Text>
      <Text>Language: {language}</Text>
      <Text>Scope Test: {scopeText}</Text>
    </View>
  )
}

export default LetVarConst;