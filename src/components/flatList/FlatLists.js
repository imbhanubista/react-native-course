import React, { useState } from 'react'
import { View,FlatList, Text } from 'react-native'
import ListRender from './ListRender'

const FlatLists = () => {
    const [data,setData] = useState([
        {name:"Rahul",age:20},
        {name:"Rohit",age:21},
        {name:"Raj",age:22},
        {name:"Ramesh",age:23},
        {name:"Rakesh",age:24},
        {name:"Rajesh",age:25},
    ])
  return (
    <View>
        <FlatList
            data={data}
            renderItem={({item})=>(
                <ListRender name={item.name} age={item.age}/>
            )}
        />
    </View>
  )
}

export default FlatLists