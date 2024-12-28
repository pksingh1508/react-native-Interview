import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
    const [layoutDimension, setLayoutDimension] = useState({});
    const [effectDimension, setEffectDimension] = useState({});
    const viewRef = useRef(null);

    // This will run before painting, but measurements might not be ready
    useLayoutEffect(() => {
        if(viewRef.current) {
            viewRef.current.measure((x, y, width, height, pageX, pageY) => {
                setLayoutDimension({x, y, width, height, pageX, pageY});
            });
        }
    }, []);

    // This will run after painting, when measurements are ready
    useEffect(() => {
        setTimeout(() => {
            if(viewRef.current) {
                viewRef.current.measure((x, y, width, height, pageX, pageY) => {
                    setEffectDimension({x, y, width, height, pageX, pageY});
                });
            }
        }, 100)
    }, []);

    return (
        <View style={styles.container}>
            <View 
                style={styles.box}
                ref={viewRef}
            />
            <Text>Layout Effect Dimensions (runs early): </Text>
            <Text>{JSON.stringify(layoutDimension, null, 2)}</Text>
            <Text>Effect Dimensions (runs after paint): </Text>
            <Text>{JSON.stringify(effectDimension, null, 2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
})

export default UseLayoutEffect;