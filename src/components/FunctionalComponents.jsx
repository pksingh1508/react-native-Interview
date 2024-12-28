import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log('componentWillUnmount: component removed');
        }
    }, [])
    
    return (
        <View style={styles.container}>
            <Text>Hello Friends, {count}</Text>
            <Button title='Increment' onPress={() => setCount(count + 1)} />
            <Button title='Reset' onPress={() => setCount(0)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        gap: 15
    }
})

export default FunctionalComponent;