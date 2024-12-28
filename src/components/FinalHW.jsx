// displays the list of products using this API and filter
// the products which has one of the tags as “beauty”
// https://dummyjson.com/products

// Create a custom hook
// Create a HOC(High Order Component)

import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useApiHook } from '../JS/useApiHook'

const FinalHW = () => {
    // const [data, setData] = React.useState([]);
    // const [loading, setLoading] = React.useState(false);
    // useEffect(() => {
    //     async function getProducts() {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get('https://dummyjson.com/products');
    //             let beautyProducts = response.data.products.filter((product) => {
    //                 return product.tags.includes('beauty');
    //             })
    //             setData(beautyProducts);
    //             setLoading(false0);
    //         } catch(err) {
    //             console.log(err);
    //             setLoading(false);
    //         }
    //     }
    //     getProducts();
    // }, [])

    // Using the custom api hook to fetch the data
    const {data, loading} = useApiHook();

    if(loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 10, color: 'orange'}}>All Products</Text>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20}}
        renderItem={({item}) => (
            <View style={styles.singleItem}>
                <Image source={{uri: item.thumbnail}} style={{width: 100, height: 100}} />
                <Text>{item.title}</Text>
                <Text>{item.category}</Text>
                <Text>{item.price}</Text>
                <Text>{item.tags.join(', ')}</Text>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    singleItem: {
        padding: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FinalHW;