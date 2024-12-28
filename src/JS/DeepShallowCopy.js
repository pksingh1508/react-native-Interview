import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const DeepShallowCopy = () => {
    const [person, setPerson] = React.useState({
        name: 'John',
        address: {
            city: 'New York',
            zip: '10001'
        }
    });

    const handleShallowCopy = () => {
        console.log('---Shallow Copy---');
        const shallowCopy = {...person};
        console.log('Before modification', shallowCopy);

        shallowCopy.address.city = "Los Angeles"; // Modify the nested property
        console.log('After modification (Shallow copy)', shallowCopy);
        console.log('Original Object (Affected by shallow copy)', person);

        setPerson(shallowCopy); // update the states
    }

    const handleDeepCopy = () => {
        console.log('---Deep Copy---');
        const deepCopy = JSON.parse(JSON.stringify(person));
        console.log('Before modification', deepCopy);

        deepCopy.address.city = "San Francisco"; // Modify the nested property
        console.log('After modification (Deep copy)', deepCopy);
        console.log('Original Object (Not affected by deep copy)', person);

        setPerson(deepCopy); // update the states
    }
  return (
    <View style={styles.container}>
      <Text>Deep Copy VS Shallow Copy</Text>
      <Text>Name: {person.name}</Text>
      <Text>City: {person.address.city}</Text>
      <Button title="Shallow Copy" onPress={handleShallowCopy}/>
      <Button title="Deep Copy" onPress={handleDeepCopy}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center', 
        gap: 15
    }
})

export default DeepShallowCopy;