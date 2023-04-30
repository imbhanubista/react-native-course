import React from 'react'
import { SectionList, Text, View } from 'react-native'

const SectionListDemo = () => {
    const DATA = [
        {
          title: 'Fruits',
          data: ['Apple', 'Banana', 'Cherry'],
        },
        {
          title: 'Vegetables',
          data: ['Carrot', 'Cucumber', 'Lettuce'],
        },
        {
          title: 'Meat',
          data: ['Beef', 'Chicken', 'Pork'],
        },
        {
          title: 'Dairy',
          data: ['Milk', 'Cheese', 'Yogurt'],
        },
      ];
      
  return (
    <View>
        <SectionList
        sections={DATA}
        renderItem={({item})=> <Text style={{fontSize:20, color:"gray"}}>{item}</Text> }
        renderSectionHeader={({section})=> <Text style={{fontSize:24, color:"green"}}>{section.title}</Text> }
        keyExtractor={(item,index)=> index}
        />
    </View>
  )
}

export default SectionListDemo