import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Slide from './Slide'

const Slider = () => {
  return (
    <View>
      <Text className='text-white text-lg'>خدماتنا</Text>
    <ScrollView horizontal className="my-3">

        <Slide params={{id:1,name:'صيانة',color:'#334155'}}/>
        <Slide params={{id:2,name:'تنظيف',color:'#4f838a'}}/>
        <Slide params={{id:3,name:'حراسات',color:'#a39c59c2'}}/>
        <Slide params={{id:4,name:'تجهيز طعام',color:'#524581'}}/>
        <Slide params={{id:5,name:'تجهيز قاعات',color:'#7a268f'}}/>
        <Slide params={{id:6,name:'علاقات عامة',color:'#6fa182'}}/>
        <Slide params={{id:7,name:'تسويق و بيع و شراء',color:'#d3cb60'}}/>
        <Slide params={{id:8,name:'حجز طيران',color:'#46838a'}}/>
        <Slide params={{id:8,name:'توصيل طرود',color:'#45538a'}}/>
        <Slide params={{id:8,name:'خدمات خاصة',color:'#46338a'}}/>
        <Slide params={{id:9,name:'خدمات اخري',color:'#79a777'}}/>
    </ScrollView>
    </View>
  )
}

export default Slider