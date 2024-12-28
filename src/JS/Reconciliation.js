import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import jestConfig from '../../jest.config';

const Reconciliation = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('John Doe');

    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleNameChange = () => {
        setName(name === 'John Doe' ? 'Jane Doe' : 'John Doe');
    }
  return (
    <View style={styles.container}>
        <Text>Reconciliation Example</Text>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={handleIncrease} />
        <Text>Name: {name}</Text>
        <Button title="Change Name" onPress={handleNameChange} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        gap: 20
    }
})

export default Reconciliation;