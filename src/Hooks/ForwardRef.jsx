import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'


// child component
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    // expose methods to parent via ref
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.clear();
        }
    }));
    return (
        <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Type something"
        />
    )
})

// Parent Component
const Parent = () => {
    const customInputRef = useRef();
  return (
    <View style={styles.container}>
        <CustomInput ref={customInputRef} />
        <Button 
            title="Focus Input"
            onPress={() => customInputRef.current.focus()}
        />
        <Button 
            title="Clear Input"
            onPress={() => customInputRef.current.clear()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginVertical: 8,
        paddingHorizontal: 16
    }
})

export default Parent;