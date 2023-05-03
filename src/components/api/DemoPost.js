import React,{useState, useEffect} from 'react'
import { View , Text, StyleSheet, ScrollView} from 'react-native'

const DemoPost = () => {
const [data, setData] = useState([])
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
}, [])

  return (
    <ScrollView>
        {
            data.map((item, index) => (
                <View key={index} style={styles.card} > 
                    <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.text} >{item.title}</Text>
                </View>
            ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    id : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'red',
        backgroundColor : 'yellow'
    },
    card : {
        margin : 10,
        padding : 10,
        backgroundColor : 'pink',
        borderRadius : 10
    },
    text : {
        fontSize : 14,
        fontWeight : 'bold',
        color : 'blue'
    }
})
export default DemoPost