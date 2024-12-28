import { View, Text, Button } from 'react-native'
import React from 'react'

const MemoEffect = () => {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('Text');

    const expensive = React.useMemo(() => {
        console.log('expensive calculation');
        return count * 97458734;
    }, [count])

  return (
    <View>
      <Text>Calculated Value: {expensive}</Text>
        <Button title='Increment Count' onPress={() => setCount(count + 1)}/>
        <Button title='Change Text' onPress={() => setText(text + "!")}/>
        <Text>Text : {text}</Text>
    </View>
  )
}

export default MemoEffect;